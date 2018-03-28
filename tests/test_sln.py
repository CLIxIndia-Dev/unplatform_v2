import os
import shutil

import pytest

from mock import patch

from star_logo_nova import sln_shared, SLNProject, SLNProjects, settings
from .test_main import BaseMainTestCase, ABS_PATH


class StarLogoNovaTests(BaseMainTestCase):
    """Test the views for getting the StarLogoNova editor

    """
    def setUp(self):
        super(StarLogoNovaTests, self).setUp()
        self.logout()
        self.sln_dir = '{0}/static/editor'.format(ABS_PATH)
        self.sln_index = '{0}/editor.html'.format(self.sln_dir)
        if not os.path.exists(self.sln_dir):
            os.makedirs(self.sln_dir)
        if not os.path.isfile(self.sln_index):
            shutil.copyfile(
                '{0}/tests/fixtures/star_logo_nova/index.html'.format(
                    ABS_PATH),
                self.sln_index)

    def tearDown(self):
        super(StarLogoNovaTests, self).tearDown()
        if os.path.exists(self.sln_dir):
            shutil.rmtree(self.sln_dir)

    def test_users_can_get_star_logo_nova_index_with_trailing_slash(self):
        self.login()
        url = '/editor/'
        req = self.app.get(url)
        self.code(req, 200)  # because there are no modules loaded

    def test_users_can_get_star_logo_nova_index_without_trailing_slash(self):
        self.login()
        url = '/editor'
        req = self.app.get(url)
        self.code(req, 200)


# pylint: disable=too-many-public-methods
class SLNSharedTests(BaseMainTestCase):
    """ Test the helper class that grabs the bank / offered IDs.
        Mock out the requests.
    """
    def setUp(self):
        super(SLNSharedTests, self).setUp()
        self.shared = sln_shared()

    def test_can_get_existing_bank(self):
        class FakeReq:
            @staticmethod
            def json():
                return [{
                    'id': 'foo'
                }]

        with patch('requests.get') as MockGet:
            MockGet.return_value = FakeReq
            bank = self.shared.get_or_create_bank()
            assert bank['id'] == 'foo'

    def test_will_create_bank_if_none_exists(self):
        class FakeGetReq:
            @staticmethod
            def json():
                return []

        class FakePostReq:
            @staticmethod
            def json():
                return {
                    'id': 'foo2'
                }

        with patch('requests.get') as MockGet:
            with patch('requests.post') as MockPost:
                MockGet.return_value = FakeGetReq
                MockPost.return_value = FakePostReq

                bank = self.shared.get_or_create_bank()
                assert bank['id'] == 'foo2'

    def test_can_get_existing_item(self):
        class FakeReq:
            @staticmethod
            def json():
                return [{
                    'id': 'foo3'
                }]

        with patch('requests.get') as MockGet:
            MockGet.return_value = FakeReq
            item = self.shared.get_or_create_item('fake-bank')
            assert item['id'] == 'foo3'

    def test_will_create_item_if_none_exists(self):
        class FakeGetReq:
            @staticmethod
            def json():
                return []

        class FakePostReq:
            @staticmethod
            def json():
                return {
                    'id': 'foo4'
                }

        with patch('requests.get') as MockGet:
            with patch('requests.post') as MockPost:
                MockGet.return_value = FakeGetReq
                MockPost.return_value = FakePostReq

                item = self.shared.get_or_create_item('fake-bank')
                assert item['id'] == 'foo4'

    def test_can_get_existing_assessment(self):
        class FakeGetReq:
            @staticmethod
            def json():
                return [{
                    'id': 'foo5'
                }]

        class FakePostReq:
            # Need this to simulate adding the item
            @staticmethod
            def json():
                return {
                    'id': 'foo5'
                }

        with patch('requests.get') as MockGet:
            with patch('requests.post') as MockPost:
                MockGet.return_value = FakeGetReq
                MockPost.return_value = FakePostReq
                assessment = self.shared.get_or_create_assessment('fake-bank',
                                                                  'fake-item')
                assert assessment['id'] == 'foo5'

    def test_will_add_item_if_not_already_part_of_assessment(self):
        class FakeGetReq:
            @staticmethod
            def json():
                return [{
                    'id': 'foo5'  # used for both the original assessmentId
                                  # and the assessment's itemIds
                }]

        class FakePostReq:
            # Need this to simulate adding the item
            @staticmethod
            def json():
                return {
                    'id': 'foo5'
                }

        with patch('requests.get') as MockGet:
            with patch('requests.post') as MockPost:
                MockGet.return_value = FakeGetReq
                MockPost.return_value = FakePostReq
                assessment = self.shared.get_or_create_assessment('fake-bank',
                                                                  'foo5')
                assert assessment['id'] == 'foo5'

    def test_will_create_assessment_if_none_exists(self):
        class FakeGetReq:
            @staticmethod
            def json():
                return []

        class FakePostReq:
            @staticmethod
            def json():
                return {
                    'id': 'foo6'
                }

        with patch('requests.get') as MockGet:
            with patch('requests.post') as MockPost:
                MockGet.return_value = FakeGetReq
                MockPost.return_value = FakePostReq

                assessment = self.shared.get_or_create_assessment('fake-bank',
                                                                  'fake-item')
                assert assessment['id'] == 'foo6'

    def test_can_get_existing_offered(self):
        class FakeReq:
            @staticmethod
            def json():
                return [{
                    'id': 'foo7'
                }]

        with patch('requests.get') as MockGet:
            MockGet.return_value = FakeReq
            offered = self.shared.get_or_create_assessment_offered(
                'fake-bank')
            assert offered['id'] == 'foo7'

    def test_will_create_offered_if_none_exists(self):
        # Also make sure that item and assessment are created here?
        class FakeGetReq:
            @staticmethod
            def json():
                return []

        class FakePostReq:
            @staticmethod
            def json():
                return {
                    'id': 'foo8'
                }

        with patch('requests.get') as MockGet:
            with patch('requests.post') as MockPost:
                with patch('star_logo_nova.sln_shared.get_or_create_item') as MockItem:
                    with patch('star_logo_nova.sln_shared.get_or_create_assessment') as MockAssessment:
                        MockGet.return_value = FakeGetReq
                        MockPost.return_value = FakePostReq
                        MockItem.return_value = {
                            'id': 'foo-item'
                        }
                        MockAssessment.return_value = {
                            'id': 'foo-assessment'
                        }

                        offered = self.shared.get_or_create_assessment_offered(
                            'fake-bank')
                        assert offered['id'] == 'foo8'

    def test_results_url_populates_correctly(self):
        url = self.shared.results_url('foo', 'bar')
        expected = '{0}/{1}/assessmentsoffered/{2}/results'.format(
            settings.QBANK_ASSESSMENT_ENDPOINT,
            'foo',  # from setUp()
            'bar'  # from setUp()
        )
        assert url == expected

    def test_can_get_taken(self):
        class FakeReq:
            @staticmethod
            def json():
                return {
                    'id': 'foo9'
                }

        with patch('requests.get') as MockGet:
            MockGet.return_value = FakeReq
            taken = self.shared.get_assessment_taken(
                'fake-bank',
                'foo9')
            assert taken['id'] == 'foo9'

    @patch('star_logo_nova.sln_shared.get_assessment_taken')
    @patch('star_logo_nova.sln_shared.save_project')
    @patch('requests.post')
    @patch('requests.get')
    def test_can_create_taken(self, MockGet, MockPost, MockSave, MockTaken):
        class FakeGetReq:
            @staticmethod
            def json():
                return []

        class FakePostReq:
            @staticmethod
            def json():
                return {
                    'id': 'foo8'
                }

        MockGet.return_value = FakeGetReq
        MockPost.return_value = FakePostReq
        MockTaken.return_value = {
            'id': 'foo8'
        }

        taken = self.shared.create_assessment_taken(
            'fake-bank',
            'fake-offered',
            {
                'title': 'project',
                'description': 'what?',
                'user_id': 'me',
                'project_str': '123'
            })
        assert taken['id'] == 'foo8'
        assert MockSave.called
        assert MockTaken.called

    @patch('star_logo_nova.sln_shared.get_assessment_taken')
    @patch('star_logo_nova.sln_shared.save_project')
    @patch('requests.post')
    @patch('requests.get')
    def test_can_create_taken_with_provenance(self,
                                              MockGet,
                                              MockPost,
                                              MockSave,
                                              MockTaken):
        class FakeGetReq:
            @staticmethod
            def json():
                return []

        class FakePostReq:
            @staticmethod
            def json():
                return {
                    'id': 'foo8',
                    'provenanceId': 'fake-parent'
                }

        MockGet.return_value = FakeGetReq
        MockPost.return_value = FakePostReq
        MockTaken.return_value = {
            'id': 'foo8',
            'provenanceId': 'fake-parent'
        }

        taken = self.shared.create_assessment_taken(
            'fake-bank',
            'fake-offered',
            {
                'title': 'project',
                'description': 'what?',
                'user_id': 'me',
                'project_str': '123',
                'provenanceId': 'foo'
            })
        assert taken['id'] == 'foo8'
        assert taken['provenanceId'] == 'fake-parent'
        assert MockSave.called
        assert MockTaken.called

    @patch('star_logo_nova.sln_shared.get_assessment_taken')
    @patch('star_logo_nova.sln_shared.save_project')
    @patch('requests.post')
    @patch('requests.get')
    def test_create_taken_with_only_user_id(self,
                                            MockGet,
                                            MockPost,
                                            MockSave,
                                            MockTaken):
        class FakeGetReq:
            @staticmethod
            def json():
                return []

        class FakePostReq:
            @staticmethod
            def json():
                return {
                    'id': 'foo11'
                }

        MockGet.return_value = FakeGetReq
        MockPost.return_value = FakePostReq
        MockTaken.return_value = {
            'id': 'foo11'
        }

        taken = self.shared.create_assessment_taken(
            'fake-bank',
            'fake-offered',
            {
                'user_id': 'me'
            })
        assert taken['id'] == 'foo11'
        assert MockSave.called
        assert MockTaken.called

    def test_create_taken_throws_exception_if_missing_parameters(self):
        with pytest.raises(KeyError):
            self.shared.create_assessment_taken(
                'fake-bank',
                'fake-offered',
                {})
        with pytest.raises(KeyError):
            self.shared.create_assessment_taken(
                'fake-bank',
                'fake-offered',
                {
                    'project_str': 'me'
                })

    @patch('star_logo_nova.sln_shared.get_assessment_taken')
    @patch('star_logo_nova.sln_shared.save_project')
    @patch('requests.put')
    def test_can_update_taken_with_title_description(self,
                                                     MockPut,
                                                     MockSave,
                                                     MockTaken):
        class FakePutReq:
            @staticmethod
            def json():
                return {
                    'id': 'foo11'
                }

        MockPut.return_value = FakePutReq
        MockTaken.return_value = {
            'id': 'foo11'
        }

        taken = self.shared.update_assessment_taken(
            'fake-bank',
            'fake-taken',
            {
                'title': 'project',
                'description': 'what?',
                'project_str': '123'
            })
        assert taken['id'] == 'foo11'
        assert MockPut.called
        assert MockSave.called
        assert MockTaken.called

    @patch('star_logo_nova.sln_shared.get_assessment_taken')
    @patch('star_logo_nova.sln_shared.save_project')
    @patch('requests.put')
    def test_can_update_taken_without_title_description(self,
                                                        MockPut,
                                                        MockSave,
                                                        MockTaken):
        class FakePutReq:
            @staticmethod
            def json():
                return {
                    'id': 'foo13'
                }

        MockPut.return_value = FakePutReq
        MockTaken.return_value = {
            'id': 'foo12'
        }

        taken = self.shared.update_assessment_taken(
            'fake-bank',
            'fake-taken',
            {
                'project_str': '123'
            })
        assert taken['id'] == 'foo12'
        assert not MockPut.called
        assert MockSave.called
        assert MockTaken.called

    def test_update_taken_throws_exception_if_no_user_id_or_project_str(self):
        with pytest.raises(KeyError):
            self.shared.update_assessment_taken(
                'fake-bank',
                'fake-taken',
                {})
        with pytest.raises(KeyError):
            self.shared.update_assessment_taken(
                'fake-bank',
                'fake-taken',
                {
                    'title': 'project',
                    'description': 'what?',
                    'user_id': 'me'
                })

    def test_can_save_project_str(self):
        class FakeGetReq:
            @staticmethod
            def json():
                return {
                    'data': [{
                        'id': '0'
                    }]
                }

        class FakePostReq:
            @staticmethod
            def json():
                return {
                    'id': 'foo8'
                }

        with patch('requests.get') as MockGet:
            with patch('requests.post') as MockPost:
                MockGet.return_value = FakeGetReq
                MockPost.return_value = FakePostReq

                self.shared.save_project(
                    'fake-bank',
                    'fake-taken',
                    {
                        'project_str': '0x123'
                    }
                )

                assert MockGet.called
                assert MockPost.called

    def test_saving_project_throws_exception_if_missing_parameters(self):
        with pytest.raises(KeyError):
            self.shared.save_project('fake-bank',
                                     'fake-taken',
                                     {})
        with pytest.raises(KeyError):
            self.shared.save_project('fake-bank',
                                     'fake-taken',
                                     {
                                         'user_id': 'foo'
                                     })


# pylint: disable=too-many-public-methods
class TestSLNProject(BaseMainTestCase):
    """ Make sure our project wrapper works as expected """
    def setUp(self):
        super(TestSLNProject, self).setUp()
        self.map = {
            'id': 'foo',
            'assignedBankIds': ['bank'],
            'assessmentOfferedId': 'offered',
            'takingAgentId': 'user',
            'displayName': {
                'text': 'project'
            },
            'description': {
                'text': 'a cool simulation'
            },
            'actualStartTime': {
                'year': 2000,
                'month': 1,
                'day': 1
            }
        }
        self.project = SLNProject(self.map)

    def test_get_agent_id_parses_identifier(self):
        identifier = self.project.get_agent_id('agent%3Afoo123%40ODL.MIT.EDU')
        assert identifier == 'foo123'

    def test_get_agent_id_parses_null_string_identifier(self):
        identifier = self.project.get_agent_id('agent%3A%40ODL.MIT.EDU')
        assert identifier == ''

    def test_get_all_results_returns_all_results_for_offered(self):
        class FakeResults:
            @staticmethod
            def json():
                return [{
                    'id': 'foo1'
                }]

        with patch('requests.get') as MockGet:
            MockGet.return_value = FakeResults
            results = self.project.get_all_results()
            assert len(results) == 1
            assert results[0]['id'] == 'foo1'

    def test_get_section_finds_section_for_taking_agent(self):
        class FakeResults:
            @staticmethod
            def json():
                return [{
                    'id': 'foo2'
                }]

        with patch('requests.get') as MockGet:
            MockGet.return_value = FakeResults
            self.project.my_map['takingAgentId'] = 'agent%3A1%40ODL'
            results = self.project.get_section()
            assert results['id'] == 'foo2'

    def test_results_url_populates_correctly(self):
        url = self.project.results_url
        expected = '{0}/{1}/assessmentsoffered/{2}/results'.format(
            settings.QBANK_ASSESSMENT_ENDPOINT,
            'bank',  # from setUp()
            'offered'  # from setUp()
        )
        assert url == expected

    def test_id_returns_id(self):
        assert self.project.id == 'foo'

    def test_title_returns_display_name_text(self):
        assert self.project.title == 'project'

    def test_description_returns_description_text(self):
        assert self.project.description == 'a cool simulation'

    def test_project_str_returns_response_text(self):
        expected = 'bar'
        self.project.section = {
            'questions': [{
                'responded': True,
                'response': {
                    'text': {
                        'text': expected
                    }
                }
            }]
        }
        assert self.project.project_str == expected

    def test_project_str_gets_section_if_not_defined(self):
        expected = 'bar2'

        def side_effect():
            section = {
                'questions': [{
                    'responded': True,
                    'response': {
                        'text': {
                            'text': expected
                        }
                    }
                }]
            }
            self.project.section = section
            return section

        with patch('star_logo_nova.SLNProject.get_section') as MockSection:
            MockSection.side_effect = side_effect
            self.project.section = None
            assert self.project.project_str == expected

    def test_project_str_returns_none_if_no_submission(self):
        self.project.section = {
            'questions': [{
                'responded': False,
                'response': None
            }]
        }
        assert self.project.project_str is None

    def test_created_at_returns_start_time_string(self):
        assert self.project.created_at == '2000-01-01T00:00:00.000000Z'

    def test_saved_at_returns_last_response_time_string(self):
        self.project.section = {
            'questions': [{
                'responded': True,
                'response': {
                    'submissionTime': {
                        'year': 1900,
                        'month': 5,
                        'day': 5
                    }
                }
            }]
        }
        assert self.project.saved_at == '1900-05-05T00:00:00.000000Z'

    def test_saved_at_gets_section_if_not_defined(self):
        def side_effect():
            section = {
                'questions': [{
                    'responded': True,
                    'response': {
                        'submissionTime': {
                            'year': 1910,
                            'month': 10,
                            'day': 20,
                            'hour': 2,
                            'minute': 5,
                            'second': 15,
                            'microsecond': 127
                        }
                    }
                }]
            }
            self.project.section = section
            return section

        with patch('star_logo_nova.SLNProject.get_section') as MockSection:
            MockSection.side_effect = side_effect
            self.project.section = None
            assert self.project.saved_at == '1910-10-20T02:05:15.000127Z'

    def test_saved_at_returns_created_at_if_no_submission(self):
        self.project.section = {
            'questions': [{
                'responded': False,
                'response': None
            }]
        }
        assert self.project.saved_at == '2000-01-01T00:00:00.000000Z'

    def test_get_parent_project_throws_exception_if_not_found(self):
        with patch('star_logo_nova.SLNProject.get_all_results') as MockResults:
            MockResults.return_value = [{
                'id': 'foo1'
            }]
            self.project.my_map['provenanceId'] = 'missing-foo'
            with pytest.raises(KeyError):
                self.project.get_parent_project()

    def test_parent_project_returns_none_if_no_provenance_id(self):
        assert self.project.parent_project is None

    def test_get_parent_project_throws_exception_if_no_provenance_id(self):
        with patch('star_logo_nova.SLNProject.get_all_results') as MockResults:
            MockResults.return_value = [{
                'id': 'foo10'
            }]
            with pytest.raises(KeyError):
                self.project.get_parent_project()

    def test_parent_project_returns_provenance_id(self):
        self.project.my_map['provenanceId'] = 'foo1'
        assert self.project.parent_project == 'foo1'

    def test_get_parent_project_returns_project(self):
        with patch('star_logo_nova.SLNProject.get_all_results') as MockResults:
            MockResults.return_value = [{
                'id': 'foo1',
                'sections': [{
                    'questions': [{
                        'response': {
                            'text': {
                                'text': 'my-project'
                            }
                        }
                    }]
                }]
            }]
            self.project.my_map['provenanceId'] = 'foo1'
            parent = self.project.get_parent_project()
            assert isinstance(parent, SLNProject)
            assert parent.id == 'foo1'

    def test_remixes_returns_children_projects(self):
        with patch('star_logo_nova.SLNProject.get_all_results') as MockResults:
            MockResults.return_value = [{
                'id': 'foo1',
                'provenanceId': 'foo'
            }, {
                'id': 'foo2',
                'provenanceId': 'fake-foo'
            }]
            remixes = self.project.remixes
            assert isinstance(remixes, SLNProjects)
            assert len(remixes) == 1
            first_remix = next(remixes)
            assert isinstance(first_remix, SLNProject)
            assert first_remix.id == 'foo1'

            with pytest.raises(StopIteration):
                next(remixes)

    def test_serialize_outputs_all_fields(self):
        expected = 'bar'
        self.project.section = {
            'questions': [{
                'responded': True,
                'response': {
                    'text': {
                        'text': expected
                    },
                    'submissionTime': {
                        'year': 1910,
                        'month': 10,
                        'day': 20,
                        'hour': 2,
                        'minute': 5,
                        'second': 15,
                        'microsecond': 127
                    }
                }
            }]
        }
        assert self.project.serialize == {
            'id': 'foo',
            'title': 'project',
            'description': 'a cool simulation',
            'created_at': '2000-01-01T00:00:00.000000Z',
            'saved_at': '1910-10-20T02:05:15.000127Z',
            'parent_project': None,
            'project_str': expected
        }


class TestSLNProjects(BaseMainTestCase):
    """ Make sure the list of projects works too """
    def setUp(self):
        super(TestSLNProjects, self).setUp()
        self.maps = [{
            'id': 'foo',
            'assignedBankIds': ['bank'],
            'assessmentOfferedId': 'offered',
            'takingAgentId': '%3Auser%40',
            'displayName': {
                'text': 'project'
            },
            'description': {
                'text': 'a cool simulation'
            },
            'actualStartTime': {
                'year': 2000,
                'month': 1,
                'day': 1
            }
        }, {
            'id': 'foo2',
            'assignedBankIds': ['bank'],
            'assessmentOfferedId': 'offered',
            'takingAgentId': '%3Auser2%40',
            'displayName': {
                'text': 'project2'
            },
            'description': {
                'text': 'a 2cool simulation'
            },
            'actualStartTime': {
                'year': 2000,
                'month': 2,
                'day': 2
            }
        }]
        self.projects = SLNProjects(self.maps)

    def test_can_get_length_of_projects(self):
        assert len(self.projects) == 2

    def test_can_iterate(self):
        # verify that the results are SLNProject instances
        first_project = next(self.projects)
        assert isinstance(first_project, SLNProject)
        second_project = next(self.projects)
        assert isinstance(second_project, SLNProject)
        assert first_project.id != second_project.id

    def test_can_serialize(self):
        def side_effect(project_self):
            if project_self.my_map['id'] == 'foo':
                section = [{
                    'questions': [{
                        'responded': True,
                        'response': {
                            'text': {
                                'text': 'project 1'
                            },
                            'submissionTime': {
                                'year': 1910,
                                'month': 10,
                                'day': 20
                            }
                        }
                    }]
                }]
            else:
                section = [{
                    'questions': [{
                        'responded': True,
                        'response': {
                            'text': {
                                'text': 'project 2'
                            },
                            'submissionTime': {
                                'year': 2910,
                                'month': 1,
                                'day': 6
                            }
                        }
                    }]
                }]
            project_self.section = section[0]
            return section

        with patch('star_logo_nova.SLNProject.get_section',
                   autospec=True) as MockSection:
            MockSection.side_effect = side_effect

            data = self.projects.serialize
            assert len(data) == 2
            first_project = data[0]
            assert isinstance(first_project, dict)
            second_project = data[1]
            assert isinstance(second_project, dict)
            assert first_project['id'] != second_project['id']
