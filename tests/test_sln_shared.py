import pytest

from mock import patch

from star_logo_nova import sln_shared, settings
from .test_main import BaseMainTestCase


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

    @patch('star_logo_nova.SLNProject.get_all_results')
    @patch('star_logo_nova.sln_shared.get_assessment_taken')
    @patch('star_logo_nova.sln_shared.save_project')
    @patch('requests.put')
    def test_can_update_taken_with_title_description(self,
                                                     MockPut,
                                                     MockSave,
                                                     MockTaken,
                                                     MockResults):
        class FakePutReq:
            @staticmethod
            def json():
                return {
                    'id': 'foo11'
                }

        MockPut.return_value = FakePutReq
        MockTaken.return_value = {
            'id': 'foo11',
            'takingAgentId': '%3Auser9%40'
        }
        MockResults.return_value = [{
            'takingAgentId': '%3Auser9%40',
            'sections': [{
                'id': 'foo9'
            }]
        }]

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

    @patch('star_logo_nova.SLNProject.get_all_results')
    @patch('star_logo_nova.sln_shared.get_assessment_taken')
    @patch('star_logo_nova.sln_shared.save_project')
    @patch('requests.put')
    def test_can_update_taken_without_title_description(self,
                                                        MockPut,
                                                        MockSave,
                                                        MockTaken,
                                                        MockResults):
        class FakePutReq:
            @staticmethod
            def json():
                return {
                    'id': 'foo13'
                }

        MockPut.return_value = FakePutReq
        MockTaken.return_value = {
            'id': 'foo12',
            'takingAgentId': '%3Auser2%40'
        }
        MockResults.return_value = [{
            'takingAgentId': '%3Auser2%40',
            'sections': [{
                'id': 'foo'
            }]
        }]

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

    @patch('star_logo_nova.sln_shared.get_assessment_taken')
    @patch('star_logo_nova.sln_shared.save_project')
    @patch('requests.post', autospec=True)
    @patch('requests.get')
    def test_can_set_genus_type_id_on_taken_create(self,
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

        def side_effect(*args, **kwargs):
            assert args
            assert 'json' in kwargs
            assert 'genusTypeId' in kwargs['json']
            assert kwargs['json']['genusTypeId'] == 'foo'
            return FakePostReq()

        MockGet.return_value = FakeGetReq
        MockPost.side_effect = side_effect
        MockTaken.return_value = {
            'id': 'foo11'
        }

        taken = self.shared.create_assessment_taken(
            'fake-bank',
            'fake-offered',
            {
                'user_id': 'me',
                'genusTypeId': 'foo'
            })
        assert taken['id'] == 'foo11'
        assert MockSave.called
        assert MockTaken.called

    @patch('requests.get')
    def test_cannot_update_taken_genus_type_id(self, MockGet):
        MockGet.return_value = {
            'genusTypeId': settings.READ_ONLY_TAKEN_GENUS_TYPE
        }
        with pytest.raises(AttributeError):
            self.shared.update_assessment_taken(
                'fake-bank',
                'fake-taken',
                {
                    'project_str': 'foo',
                    'genusTypeId': 'read-write'
                })
