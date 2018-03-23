import os
import shutil

from test_main import BaseMainTestCase, ABS_PATH


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
