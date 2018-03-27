import pytz
import re
import requests

from datetime import datetime

import settings


class SLNProject:
    """ Convenience wrapper around our AssessmentTaken
        objects that maps to StarLogoNova projects """
    def __init__(self, object_map):
        self.my_map = object_map
        self.section = None
        self.time_format = '%Y-%m-%dT%H:%M:%S.%fZ'

    @staticmethod
    def get_agent_id(taking_agent_id):
        """ Parse out only the identifier """
        identifier = re.compile('%3A(.*)%40')
        return identifier.search(taking_agent_id).group(1)

    def get_all_results(self):
        """ Get all the results / AssessmentTakens for the
            same AssessmentOffered. Used in the provenance
            methods. """
        req = requests.get(self.results_url, verify=False)
        takens = req.json()
        return takens

    def get_section(self):
        """ Get the AssessmentOffered results for this
            user, and save the section """
        url = '{0}?agentId={1}'.format(
            self.results_url,
            self.get_agent_id(self.my_map['takingAgentId'])
        )
        req = requests.get(url, verify=False)
        data = req.json()
        # Should only have one match on the takingAgentId
        self.section = data[0]
        return self.section

    @property
    def results_url(self):
        """ helper method to return the results URL """
        return '{0}/{1}/assessmentsoffered/{2}/results'.format(
            settings.QBANK_ASSESSMENT_ENDPOINT,
            self.my_map['assignedBankIds'][0],
            self.my_map['assessmentOfferedId']
        )

    @property
    def id(self):
        return self.my_map['id']

    @property
    def title(self):
        return self.my_map['displayName']['text']

    @property
    def description(self):
        return self.my_map['description']['text']

    @property
    def project_str(self):
        """ Have to get the AssessmentSection with responses
            for this... """
        if self.section is None:
            self.get_section()
        # First question (1 of 1)
        # Last response
        # Extended text interaction response
        latest_response = self.section['questions'][0]['response']
        if 'missingResponse' in latest_response:
            return None
        return latest_response['text']['text']

    @property
    def created_at(self):
        """ This should be an ISO String, like
            2018-03-22T15:40:14.533736Z """
        start_time_with_tz = self.my_map['actualStartTime']
        start_time_with_tz['tzinfo'] = pytz.utc
        created_at = datetime(**start_time_with_tz)
        return created_at.strftime(self.time_format)

    @property
    def saved_at(self):
        """ Have to get the AssessmentSection with responses
            for this... should be an ISO String, like
            2018-03-22T15:40:14.533736Z """
        if self.section is None:
            self.get_section()
        # First question (1 of 1)
        # Last response
        # Submission time, if present
        latest_response = self.section['questions'][0]['response']
        if 'missingResponse' in latest_response:
            return None
        submission_time_with_tz = latest_response['submissionTime']
        submission_time_with_tz['tzinfo'] = pytz.utc
        submission_time = datetime(**submission_time_with_tz)
        return submission_time.strftime(self.time_format)

    @property
    def parent_project(self):
        """ Just return the provenanceId here """
        if 'provenanceId' in self.my_map:
            return self.my_map['provenanceId']
        return None

    def get_parent_project(self):
        """ Have to run another query based on provenanceId """
        # Note that we run this query against ``/results``
        #   otherwise we have to make 2 requests (one for AssessmentTaken
        #   and another for the responses). Assuming the cost of
        #   2 HTTP requests is worse.
        takens = self.get_all_results()
        parent_takens = [taken
                         for taken in takens
                         if taken['id'] == self.my_map['provenanceId']]
        if len(parent_takens) == 0:
            raise KeyError('parent taken not found ...')
        parent_taken = parent_takens[0]
        return SLNProject(parent_taken)

    @property
    def remixes(self):
        """ returns all children projects """
        # Note that we run this query against ``/results``
        #   otherwise we have to make 2 requests (one for AssessmentTaken
        #   and another for the responses). Assuming the cost of
        #   2 HTTP requests is worse.
        takens = self.get_all_results()
        remixes = [taken
                   for taken in takens
                   if taken['provenanceId'] == self.my_map['id']]

        return SLNProjects(remixes)

    @property
    def serialize(self):
        """ turn into the JSON blob that SLN expects """
        return {
            'id': self.id,
            'title': self.title,
            'description': self.description,
            'created_at': self.created_at,
            'saved_at': self.saved_at,
            'parent_project': self.parent_project,
            'project_str': self.project_str
        }


class SLNProjects:
    """ List of SLNProject objects """
    def __init__(self, object_maps):
        self.projects = [SLNProject(object_map) for object_map in object_maps]
        self.index = 0

    def __len__(self):
        return len(self.projects)

    def next(self):
        if self.index == len(self.projects):
            raise StopIteration
        next_project = self.projects[self.index]
        self.index += 1
        return next_project

    @property
    def serialize(self):
        return [project.serialize for project in self.projects]


class sln_shared:
    """ Contains shared helper methods for StarLogoNova endpoints """
    def get_or_create_bank(self):
        url = '{0}?genusTypeId={1}'.format(settings.QBANK_ASSESSMENT_ENDPOINT,
                                           settings.DEFAULT_BANK_GENUS_TYPE)
        req = requests.get(url, verify=False)
        banks = req.json()
        default_bank = None
        if len(banks) > 0:
            default_bank = banks[0]
        else:
            payload = {
                'name': 'Default StarLogoNova Assessment Bank',
                'description': 'For storing student projects',
                'genusTypeId': settings.DEFAULT_BANK_GENUS_TYPE
            }
            req = requests.post(settings.QBANK_ASSESSMENT_ENDPOINT,
                                json=payload,
                                verify=False)
            default_bank = req.json()
        return default_bank

    def get_or_create_item(self, bank_id):
        """ In the given bank, find or create a SLN item (extended
            text interaction). """
        base_url = '{0}/{1}/items'.format(
            settings.QBANK_ASSESSMENT_ENDPOINT,
            bank_id)
        url = '{0}?genusTypeId={1}'.format(
            base_url,
            settings.DEFAULT_ITEM_GENUS_TYPE)
        req = requests.get(url, verify=False)
        items = req.json()
        default_item = None
        if len(items) > 0:
            default_item = items[0]
        else:
            payload = {
                'name': 'Default StarLogoNova Item',
                'description': (
                    'To accept student projects as Taken submissions'
                ),
                'genusTypeId': (
                    'item-genus-type%3A'
                    'qti-extended-text-interaction%40ODL.MIT.EDU'
                ),
                'question': {
                    'genusTypeId': (
                        'question-type%3A'
                        'qti-extended-text-interaction%40ODL.MIT.EDU'
                    ),
                    'questionString': 'Please submit your SLN project'
                }
            }
            req = requests.post(base_url,
                                json=payload,
                                verify=False)
            default_item = req.json()
        return default_item

    def get_or_create_assessment(self, bank_id, item_id):
        """ In the given bank, find or create a SLN assessment,
            and make sure the given item is part of it """
        base_url = '{0}/{1}/assessments'.format(
            settings.QBANK_ASSESSMENT_ENDPOINT,
            bank_id)
        url = '{0}?genusTypeId={1}'.format(
            base_url,
            settings.DEFAULT_ASSESSMENT_GENUS_TYPE)
        req = requests.get(url, verify=False)
        assessments = req.json()
        default_assessment = None
        if len(assessments) > 0:
            default_assessment = assessments[0]

            # check if the item is part of this assessment
            url = '{0}/items'.format(base_url)
            req = requests.get(url)
            assessment_items = req.json()
            current_item_ids = [i['id'] for i in assessment_items]
            if len(current_item_ids) == 0 or item_id not in current_item_ids:
                payload = {
                    'itemIds': [item_id]
                }
                requests.post(base_url,
                              json=payload,
                              verify=False)
        else:
            payload = {
                'name': 'Default StarLogoNova Assessment',
                'description': (
                    'To accept student projects as Taken submissions'
                ),
                'genusTypeId': settings.DEFAULT_ASSESSMENT_GENUS_TYPE,
                'itemIds': [item_id]
            }
            req = requests.post(base_url,
                                json=payload,
                                verify=False)
            default_assessment = req.json()
        return default_assessment

    def get_or_create_assessment_offered(self, bank_id):
        """ In the given bank, find or create a SLN item (extended
            text interaction), assessment, and assessment offered.
            For performance reasons, we'll assume if the offered exists,
            we do **NOT** need to create the item / assessment. If the
            offered does not exist, we will need to create the item and
            assessment. """
        base_url = '{0}/{1}/assessmentsoffered'.format(
            settings.QBANK_ASSESSMENT_ENDPOINT,
            bank_id)
        url = '{0}?genusTypeId={1}'.format(
            base_url,
            settings.DEFAULT_OFFERED_GENUS_TYPE)
        req = requests.get(url, verify=False)
        offereds = req.json()
        default_offered = None
        if len(offereds) > 0:
            default_offered = offereds[0]
        else:
            item = self.get_or_create_item(bank_id)
            assessment = self.get_or_create_assessment(bank_id, item['id'])
            url = '{0}/{1}/assessments/{2}/assessmentsoffered'.format(
                settings.QBANK_ASSESSMENT_ENDPOINT,
                bank_id,
                assessment['id']
            )
            payload = {
                'name': 'Default StarLogoNova AssessmentOffered',
                'description': (
                    'To accept student projects as Taken submissions'
                ),
                'genusTypeId': settings.DEFAULT_OFFERED_GENUS_TYPE
            }
            req = requests.post(url,
                                json=payload,
                                verify=False)
            default_offered = req.json()
        return default_offered

    def results_url(self, bank_id, offered_id):
        """ helper method to return the results URL """
        return '{0}/{1}/assessmentsoffered/{2}/results'.format(
            settings.QBANK_ASSESSMENT_ENDPOINT,
            bank_id,
            offered_id
        )
