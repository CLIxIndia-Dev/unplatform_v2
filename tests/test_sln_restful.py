import json

from mock import patch, PropertyMock

from .test_main import BaseMainTestCase


class SLNRestfulTests(BaseMainTestCase):
    """ Testing the RESTful endpoints """

    # pylint: disable=too-many-arguments
    @patch('star_logo_nova.SLNProject.get_all_results')
    @patch('star_logo_nova.SLNProjects.serialize',
           autospec=True)
    @patch('requests.get')
    @patch('star_logo_nova.sln_shared.get_or_create_assessment_offered')
    @patch('star_logo_nova.sln_shared.get_or_create_bank')
    def test_can_get_projects(self,
                              MockBank,
                              MockOffered,
                              MockGet,
                              MockSerialize,
                              MockResults):
        class FakeTakens:
            @staticmethod
            def json():
                return [{
                    'id': 'taken1',
                    'takingAgentId': '%3Auserfoo%40'
                }]

        def side_effect(projects_self, order_by=None):
            assert len(projects_self) == 1
            assert order_by is not None
            return [{
                'id': 'taken1'
            }]

        MockBank.return_value = {
            'id': 'bank'
        }
        MockOffered.return_value = {
            'id': 'offered'
        }
        MockGet.return_value = FakeTakens
        MockSerialize.side_effect = side_effect
        MockResults.return_value = [{
            'takingAgentId': '%3Auserfoo%40',
            'sections': [{
                'id': 'foofoo'
            }]
        }]

        url = '/api/projects'
        req = self.app.get(url)
        data = self.json(req)
        assert len(data) == 1
        assert data[0]['id'] == 'taken1'
        assert MockBank.called
        assert MockOffered.called
        assert MockGet.called
        assert MockSerialize.called

    @patch('star_logo_nova.SLNProject.get_all_results')
    @patch('star_logo_nova.SLNProject.serialize',
           new_callable=PropertyMock)
    @patch('star_logo_nova.sln_shared.get_assessment_taken')
    @patch('star_logo_nova.sln_shared.get_or_create_bank')
    def test_can_get_specific_project(self,
                                      MockBank,
                                      MockTaken,
                                      MockSerialize,
                                      MockResults):
        MockBank.return_value = {
            'id': 'bank'
        }
        MockTaken.return_value = {
            'id': 'taken',
            'takingAgentId': 'foo'
        }
        MockResults.return_value = [{
            'takingAgentId': 'foo',
            'sections': [{
                'id': 'footwo'
            }]
        }]
        MockSerialize.return_value = {
            'id': 'taken2'
        }
        url = '/api/project/foo%3A1%40ODL'
        req = self.app.get(url)
        data = self.json(req)
        assert data['id'] == 'taken2'
        assert MockBank.called
        assert MockTaken.called
        assert MockSerialize.called

    @patch('star_logo_nova.SLNProject.get_all_results')
    @patch('star_logo_nova.SLNProject.serialize',
           new_callable=PropertyMock)
    @patch('star_logo_nova.sln_shared.update_assessment_taken')
    @patch('star_logo_nova.sln_shared.get_or_create_bank')
    def test_can_update_project(self,
                                MockBank,
                                MockTaken,
                                MockSerialize,
                                MockResults):
        MockBank.return_value = {
            'id': 'bank'
        }
        MockTaken.return_value = {
            'id': 'taken4',
            'takingAgentId': 'bar'
        }
        MockResults.return_value = [{
            'takingAgentId': 'bar',
            'sections': [{
                'id': 'bim'
            }]
        }]
        MockSerialize.return_value = {
            'id': 'taken6'
        }
        url = '/api/project/foo%3A2%40ODL'
        payload = {
            'title': 'foo',
            'description': 'bar',
            'project_str': '123x'
        }
        req = self.app.patch(
            url,
            params=json.dumps(payload),
            headers={'content-type': 'application/json'})
        self.ok(req)
        data = self.json(req)
        assert data['id'] == 'taken6'
        assert MockBank.called
        assert MockTaken.called
        assert MockSerialize.called

    # pylint: disable=too-many-arguments
    @patch('star_logo_nova.SLNProject.get_all_results')
    @patch('star_logo_nova.SLNProject.serialize',
           new_callable=PropertyMock)
    @patch('star_logo_nova.sln_shared.create_assessment_taken',
           autospec=True)
    @patch('star_logo_nova.sln_shared.get_or_create_assessment_offered')
    @patch('star_logo_nova.sln_shared.get_or_create_bank')
    def test_can_remix_a_project(self,
                                 MockBank,
                                 MockOffered,
                                 MockTaken,
                                 MockSerialize,
                                 MockResults):
        def side_effect(*args):
            data = args[3]
            assert 'user_id' in data
            assert '--' in data['user_id']
            assert 'provenanceId' in data
            assert data['provenanceId'] == 'foo%3A3%40ODL'
            return {
                'id': 'taken',
                'takingAgentId': 'my-agent'
            }

        MockBank.return_value = {
            'id': 'bank'
        }
        MockOffered.return_value = {
            'id': 'offered'
        }
        MockTaken.side_effect = side_effect
        MockResults.return_value = [{
            'takingAgentId': 'my-agent',
            'sections': [{
                'id': 'agent-id'
            }]
        }]
        MockSerialize.return_value = {
            'id': 'taken7'
        }
        url = '/api/project/foo%3A3%40ODL/remixes'
        payload = {
            'title': 'foo',
            'description': 'bar',
            'project_str': '123x'
        }
        req = self.app.post(
            url,
            params=json.dumps(payload),
            headers={'content-type': 'application/json'})
        self.ok(req)
        data = self.json(req)
        assert data['id'] == 'taken7'
        assert MockBank.called
        assert MockOffered.called
        assert MockTaken.called
        assert MockSerialize.called

    # pylint: disable=too-many-arguments
    @patch('star_logo_nova.SLNProject.get_all_results')
    @patch('star_logo_nova.SLNProject.serialize',
           new_callable=PropertyMock)
    @patch('star_logo_nova.sln_shared.create_assessment_taken',
           autospec=True)
    @patch('star_logo_nova.sln_shared.get_assessment_taken')
    @patch('star_logo_nova.sln_shared.get_or_create_assessment_offered')
    @patch('star_logo_nova.sln_shared.get_or_create_bank')
    def test_remixing_without_new_title_sets_default(self,
                                                     MockBank,
                                                     MockOffered,
                                                     MockGetTaken,
                                                     MockTaken,
                                                     MockSerialize,
                                                     MockResults):
        def side_effect(*args):
            data = args[3]
            assert 'user_id' in data
            assert '--' in data['user_id']
            assert 'provenanceId' in data
            assert data['provenanceId'] == 'foo%3A3%40ODL'
            assert 'title' in data
            assert data['title'] == 'Copy of taken-text'
            assert 'description' in data
            assert data['description'] == 'bar'
            return {
                'id': 'taken',
                'takingAgentId': '%3Auser7%40'
            }

        MockBank.return_value = {
            'id': 'bank'
        }
        MockOffered.return_value = {
            'id': 'offered'
        }
        MockGetTaken.return_value = {
            'id': 'taken2',
            'takingAgentId': '%3Auser7%40',
            'displayName': {
                'text': 'taken-text'
            },
            'description': {
                'text': 'taken-description'
            }
        }
        MockTaken.side_effect = side_effect
        MockResults.return_value = [{
            'takingAgentId': '%3Auser7%40',
            'sections': [{
                'id': 'foo7'
            }]
        }]
        MockSerialize.return_value = {
            'id': 'taken7'
        }
        url = '/api/project/foo%3A3%40ODL/remixes'
        payload = {
            'description': 'bar',
            'project_str': '123x'
        }
        req = self.app.post(
            url,
            params=json.dumps(payload),
            headers={'content-type': 'application/json'})
        self.ok(req)
        data = self.json(req)
        assert data['id'] == 'taken7'
        assert MockBank.called
        assert MockOffered.called
        assert MockGetTaken.called
        assert MockTaken.called
        assert MockSerialize.called

    # pylint: disable=too-many-arguments
    @patch('star_logo_nova.SLNProject.get_all_results')
    @patch('star_logo_nova.SLNProject.serialize',
           new_callable=PropertyMock)
    @patch('star_logo_nova.sln_shared.create_assessment_taken',
           autospec=True)
    @patch('star_logo_nova.sln_shared.get_assessment_taken')
    @patch('star_logo_nova.sln_shared.get_or_create_assessment_offered')
    @patch('star_logo_nova.sln_shared.get_or_create_bank')
    def test_remixing_without_new_description_sets_default(self,
                                                           MockBank,
                                                           MockOffered,
                                                           MockGetTaken,
                                                           MockTaken,
                                                           MockSerialize,
                                                           MockResults):
        def side_effect(*args):
            data = args[3]
            assert 'user_id' in data
            assert '--' in data['user_id']
            assert 'provenanceId' in data
            assert data['provenanceId'] == 'foo%3A3%40ODL'
            assert 'title' in data
            assert data['title'] == 'foo'
            assert 'description' in data
            assert data['description'] == 'taken-description'
            return {
                'id': 'taken',
                'takingAgentId': 'me-myself'
            }

        MockBank.return_value = {
            'id': 'bank'
        }
        MockOffered.return_value = {
            'id': 'offered'
        }
        MockGetTaken.return_value = {
            'id': 'taken3',
            'takingAgentId': 'me-myself',
            'displayName': {
                'text': 'taken-text'
            },
            'description': {
                'text': 'taken-description'
            }
        }
        MockTaken.side_effect = side_effect
        MockResults.return_value = [{
            'takingAgentId': 'me-myself',
            'sections': [{
                'id': 'you'
            }]
        }]
        MockSerialize.return_value = {
            'id': 'taken7'
        }
        url = '/api/project/foo%3A3%40ODL/remixes'
        payload = {
            'title': 'foo',
            'project_str': '123x'
        }
        req = self.app.post(
            url,
            params=json.dumps(payload),
            headers={'content-type': 'application/json'})
        self.ok(req)
        data = self.json(req)
        assert data['id'] == 'taken7'
        assert MockBank.called
        assert MockOffered.called
        assert MockGetTaken.called
        assert MockTaken.called
        assert MockSerialize.called

    def test_remixing_with_genus_type_throws_exception(self):
        url = '/api/project/foo%3A3%40ODL/remixes'
        payload = {
            'title': 'foo',
            'project_str': '123x'
        }
        req = self.app.post(
            url,
            params=json.dumps(payload),
            headers={'content-type': 'application/json'},
            expect_errors=True)
        self.code(req, 500)

    @patch('star_logo_nova.SLNProject.get_all_results')
    @patch('star_logo_nova.SLNProject.serialize',
           new_callable=PropertyMock)
    @patch('star_logo_nova.sln_shared.create_assessment_taken',
           autospec=True)
    @patch('star_logo_nova.sln_shared.get_or_create_assessment_offered')
    @patch('star_logo_nova.sln_shared.get_or_create_bank')
    def test_can_create_a_new_project(self,
                                      MockBank,
                                      MockOffered,
                                      MockTaken,
                                      MockSerialize,
                                      MockResults):
        def side_effect(*args):
            data = args[3]
            assert 'user_id' in data
            assert '--' in data['user_id']
            return {
                'id': 'taken',
                'takingAgentId': '%3Auser1%40'
            }

        MockBank.return_value = {
            'id': 'bank'
        }
        MockOffered.return_value = {
            'id': 'offered'
        }
        MockTaken.side_effect = side_effect
        MockSerialize.return_value = {
            'id': 'taken5'
        }
        MockResults.return_value = [{
            'takingAgentId': '%3Auser1%40',
            'sections': [{
                'id': 'foo1'
            }]
        }]
        url = '/api/projects'
        payload = {
            'title': 'foo',
            'description': 'bar',
            'project_str': '123x'
        }
        req = self.app.post(
            url,
            params=json.dumps(payload),
            headers={'content-type': 'application/json'})
        self.ok(req)
        data = self.json(req)
        assert data['id'] == 'taken5'
        assert MockBank.called
        assert MockOffered.called
        assert MockTaken.called
        assert MockSerialize.called

    @patch('star_logo_nova.sln_shared.get_or_create_bank')
    def test_trying_to_update_a_read_only_project_throws_exception(self,
                                                                   MockBank):
        # based on the genusTypeId
        MockBank.return_value = {
            'id': 'bank'
        }

        url = '/api/project/foo%3A2%40ODL'
        payload = {
            'title': 'foo',
            'description': 'bar',
            'project_str': '123x'
        }
        req = self.app.patch(
            url,
            params=json.dumps(payload),
            headers={'content-type': 'application/json'},
            expect_errors=True)
        self.code(req, 500)
        assert MockBank.called
