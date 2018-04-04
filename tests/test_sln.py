import os
import shutil

import pytest

from mock import patch

from star_logo_nova import SLNProject, SLNProjects, settings
from .test_main import BaseMainTestCase, ABS_PATH


class StarLogoNovaTests(BaseMainTestCase):
    """Test the views for getting the StarLogoNova editor

    """
    def setUp(self):
        super(StarLogoNovaTests, self).setUp()
        self.logout()
        self.sln_dir = '{0}/static/sln_editor'.format(ABS_PATH)
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
class TestSLNProject(BaseMainTestCase):
    """ Make sure our project wrapper works as expected """
    def setUp(self):
        super(TestSLNProject, self).setUp()
        self.map = {
            'id': 'foo',
            'assignedBankIds': ['bank'],
            'assessmentOfferedId': 'offered',
            'genusTypeId': 'DEFAULT%3ADEFAULT%40DEFAULT',
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
            'project_str': expected,
            'is_locked': False
        }

    def test_can_get_is_locked_status(self):
        assert not self.project.is_locked
        self.project.my_map['genusTypeId'] = \
            settings.READ_ONLY_TAKEN_GENUS_TYPE
        assert self.project.is_locked


class TestSLNProjects(BaseMainTestCase):
    """ Make sure the list of projects works too """
    def setUp(self):
        super(TestSLNProjects, self).setUp()
        self.maps = [{
            'id': 'foo',
            'assignedBankIds': ['bank'],
            'assessmentOfferedId': 'offered',
            'genusTypeId': 'DEFAULT%3ADEFAULT%40DEFAULT',
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
            'genusTypeId': 'DEFAULT%3ADEFAULT%40DEFAULT',
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

            data = self.projects.serialize()
            assert len(data) == 2
            first_project = data[0]
            assert isinstance(first_project, dict)
            second_project = data[1]
            assert isinstance(second_project, dict)
            assert first_project['id'] != second_project['id']

    def test_can_sort_serialization_results(self):
        def side_effect_1(project_self):
            if project_self.my_map['id'] == 'foo1':
                section = [{
                    'questions': [{
                        'responded': True,
                        'response': {
                            'text': {
                                'text': 'project 1'
                            },
                            'submissionTime': {
                                'year': 2510,
                                'month': 10,
                                'day': 20
                            }
                        }
                    }]
                }]
            elif project_self.my_map['id'] == 'foo2':
                section = [{
                    'questions': [{
                        'responded': True,
                        'response': {
                            'text': {
                                'text': 'project 2'
                            },
                            'submissionTime': {
                                'year': 2710,
                                'month': 1,
                                'day': 6
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
                                'text': 'project 3'
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

        def side_effect_2(project_self):
            if project_self.my_map['id'] == 'foo1':
                section = [{
                    'questions': [{
                        'responded': True,
                        'response': {
                            'text': {
                                'text': 'project 1'
                            },
                            'submissionTime': {
                                'year': 2510,
                                'month': 10,
                                'day': 20
                            }
                        }
                    }]
                }]
            elif project_self.my_map['id'] == 'foo2':
                section = [{
                    'questions': [{
                        'responded': True,
                        'response': {
                            'text': {
                                'text': 'project 2'
                            },
                            'submissionTime': {
                                'year': 2010,
                                'month': 1,
                                'day': 6
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
                                'text': 'project 3'
                            },
                            'submissionTime': {
                                'year': 1910,
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
            MockSection.side_effect = side_effect_1

            test_projects = [{
                'id': 'foo1',
                'assignedBankIds': ['bank'],
                'assessmentOfferedId': 'offered',
                'genusTypeId': 'DEFAULT%3ADEFAULT%40DEFAULT',
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
                'genusTypeId': 'DEFAULT%3ADEFAULT%40DEFAULT',
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
            }, {
                'id': 'foo3',
                'assignedBankIds': ['bank'],
                'assessmentOfferedId': 'offered',
                'genusTypeId': settings.READ_ONLY_TAKEN_GENUS_TYPE,
                'takingAgentId': '%3Auser2%40',
                'displayName': {
                    'text': 'project3'
                },
                'description': {
                    'text': 'a 3cool simulation'
                },
                'actualStartTime': {
                    'year': 2000,
                    'month': 2,
                    'day': 2
                }
            }]

            # expected sort order should be foo3, foo2, foo1
            data = SLNProjects(test_projects).serialize(
                order_by=['is_locked', 'saved_at'])
            assert len(data) == 3
            assert data[0]['id'] == 'foo3'
            assert data[1]['id'] == 'foo2'
            assert data[2]['id'] == 'foo1'

            # Because the above was also simply reverse of the
            #   original order, let's test another scenario
            MockSection.side_effect = side_effect_2

            test_projects = [{
                'id': 'foo1',
                'assignedBankIds': ['bank'],
                'assessmentOfferedId': 'offered',
                'genusTypeId': settings.READ_ONLY_TAKEN_GENUS_TYPE,
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
                'genusTypeId': 'DEFAULT%3ADEFAULT%40DEFAULT',
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
            }, {
                'id': 'foo3',
                'assignedBankIds': ['bank'],
                'assessmentOfferedId': 'offered',
                'genusTypeId': settings.READ_ONLY_TAKEN_GENUS_TYPE,
                'takingAgentId': '%3Auser2%40',
                'displayName': {
                    'text': 'project3'
                },
                'description': {
                    'text': 'a 3cool simulation'
                },
                'actualStartTime': {
                    'year': 2000,
                    'month': 2,
                    'day': 2
                }
            }]

            data = SLNProjects(test_projects).serialize(
                order_by=['is_locked', 'saved_at'])
            assert len(data) == 3
            assert data[0]['id'] == 'foo1'
            assert data[1]['id'] == 'foo3'
            assert data[2]['id'] == 'foo2'
