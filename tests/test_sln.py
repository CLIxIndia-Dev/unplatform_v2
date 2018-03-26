import os
import shutil

from mock import patch

from main import sln_shared
from .test_main import BaseMainTestCase, ABS_PATH


class StarLogoNovaTests(BaseMainTestCase):
    """Test the views for getting the StarLogoNova editor

    """
    def setUp(self):
        super(StarLogoNovaTests, self).setUp()
        self.logout()
        self.sln_dir = '{0}/static/star_logo_nova'.format(ABS_PATH)
        self.sln_index = '{0}/index.html'.format(self.sln_dir)
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


class SLNSharedTests(BaseMainTestCase):
    """ Test the helper class that grabs the bank / offered IDs.
        Mock out the requests.
    """
    def setUp(self):
        super(SLNSharedTests, self).setUp()
        self.shared = sln_shared()

    def tearDown(self):
        super(SLNSharedTests, self).tearDown()

    def test_can_get_existing_bank(self):
        class FakeReq:
            @staticmethod
            def json():
                return [{
                    'id': 'foo'
                }]

        with patch('requests.get') as MockGet:
            MockGet.return_value = FakeReq
            bank = self.shared._get_or_create_bank()
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

                bank = self.shared._get_or_create_bank()
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
            item = self.shared._get_or_create_item('fake-bank')
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

                item = self.shared._get_or_create_item('fake-bank')
                assert item['id'] == 'foo4'

    def test_can_get_existing_assessment(self):
        class FakeReq:
            @staticmethod
            def json():
                return [{
                    'id': 'foo5'
                }]

        with patch('requests.get') as MockGet:
            MockGet.return_value = FakeReq
            assessment = self.shared._get_or_create_assessment('fake-bank',
                                                               'fake-item')
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

                assessment = self.shared._get_or_create_assessment('fake-bank',
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
            offered = self.shared._get_or_create_assessment_offered(
                'fake-bank')
            assert offered['id'] == 'foo7'

    def test_will_create_offered_if_none_exists(self):
        # Also make sure that item and assessment are created here
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
                with patch('main.sln_shared._get_or_create_item') as MockItem:
                    with patch('main.sln_shared._get_or_create_assessment') as MockAssessment:
                        MockGet.return_value = FakeGetReq
                        MockPost.return_value = FakePostReq
                        MockItem.return_value = {
                            'id': 'foo-item'
                        }
                        MockAssessment.return_value = {
                            'id': 'foo-assessment'
                        }

                        offered = self.shared._get_or_create_assessment_offered(
                            'fake-bank')
                        assert offered['id'] == 'foo8'
