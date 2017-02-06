import glob
import json
import os
import shutil

from testing_utilities import BaseTestCase

PROJECT_PATH = os.path.dirname(os.path.abspath(__file__))
ABS_PATH = '{0}'.format(os.path.abspath(os.path.join(PROJECT_PATH, os.pardir)))


class BaseMainTestCase(BaseTestCase):
    def setUp(self):
        super(BaseMainTestCase, self).setUp()

    def tearDown(self):
        # don't teardown again here, because the BaseTestCase tearDown
        # will try to remove the test_datastore directory,
        # but that isn't re-created automatically with these tests
        # super(BaseMainTestCase, self).tearDown()
        pass


class BasicServiceTests(BaseMainTestCase):
    """Test the views for getting the basic service calls

    """
    def setUp(self):
        super(BasicServiceTests, self).setUp()

    def tearDown(self):
        super(BasicServiceTests, self).tearDown()

    def test_users_can_get_index_page(self):
        url = '/'
        req = self.app.get(url)
        self.ok(req)
        self.message(req, 'CLIx')

    def test_session_id_resets_on_index_get(self):
        sessions_dir = '{0}/webapps/unplatform/sessions'.format(ABS_PATH)

        req = self.app.get('/version')
        self.ok(req)

        self.assertEqual(len(os.listdir(sessions_dir)), 1)

        req = self.app.get('/')
        self.ok(req)

        self.assertEqual(len(os.listdir(sessions_dir)), 0)


class ModuleDirectoryListingTests(BaseMainTestCase):
    """Test the views for the GET modules endpoint

    """
    def setUp(self):
        super(ModuleDirectoryListingTests, self).setUp()
        self.url = '/modules_list'

    def tearDown(self):
        super(ModuleDirectoryListingTests, self).tearDown()

    def test_can_get_modules_listing(self):
        req = self.app.get(self.url)
        self.ok(req)
        # data = self.json(req)
        # self.assertTrue(len(data) > 0)


class ConfigurationTests(BaseMainTestCase):
    """Test the school configuration endpoints

    """
    def setUp(self):
        super(ConfigurationTests, self).setUp()
        self.url = '/api/v1/configuration'
        self.config_file = '{0}/webapps/unplatform/configuration/config.json'.format(ABS_PATH)
        if os.path.isfile(self.config_file):
            os.remove(self.config_file)

    def tearDown(self):
        super(ConfigurationTests, self).tearDown()
        if os.path.isfile(self.config_file):
            os.remove(self.config_file)

    def test_can_get_null_config(self):
        req = self.app.get(self.url)
        self.ok(req)
        data = self.json(req)
        self.assertEqual(data, {})

    def test_can_set_config(self):
        payload = {
            'state': 'FOO',
            'district': 'BAR',
            'schoolId': '123',
            'terminalId': '1',
            'locale': 'hi'
        }

        req = self.app.post(self.url,
                            params=json.dumps(payload),
                            headers={'content-type': 'application/json'})
        self.ok(req)
        data = self.json(req)
        for key in payload.keys():
            self.assertEqual(data[key], payload[key])
        self.assertIn('timestamp', data.keys())

        self.assertTrue(os.path.isfile(self.config_file))
        with open(self.config_file, 'rb') as config:
            conf = json.load(config)
            for key in data.keys():
                self.assertEqual(conf[key], data[key])

    def test_can_get_config(self):
        payload = {
            'state': 'FOO',
            'district': 'BAR',
            'schoolId': '123',
            'terminalId': '1',
            'locale': 'hi'
        }

        req = self.app.post(self.url,
                            params=json.dumps(payload),
                            headers={'content-type': 'application/json'})
        self.ok(req)
        data = self.json(req)
        for key in payload.keys():
            self.assertEqual(data[key], payload[key])
        self.assertIn('timestamp', data.keys())

        req = self.app.get(self.url)
        self.ok(req)
        get_data = self.json(req)
        for key in payload.keys():
            self.assertEqual(get_data[key], payload[key])
        self.assertIn('timestamp', get_data.keys())


class UserSurveyTests(BaseMainTestCase):
    """Test the user survey

    """
    def setUp(self):
        super(UserSurveyTests, self).setUp()
        self.url = '/api/v1/session'
        self.data_dir = '{0}/webapps/unplatform/user_data'.format(ABS_PATH)
        if os.path.isdir(self.data_dir):
            shutil.rmtree(self.data_dir)

    def tearDown(self):
        super(UserSurveyTests, self).tearDown()
        if os.path.isdir(self.data_dir):
            shutil.rmtree(self.data_dir)

    def test_can_set_survey_data(self):
        payload = {
            'userType': 'teacher',
            'userCount': '3+',
            'sessionId': 'foo'
        }

        req = self.app.post(self.url,
                            params=json.dumps(payload),
                            headers={'content-type': 'application/json'})
        self.ok(req)
        self.assertTrue(os.path.isdir(self.data_dir))
        for user_file in glob.iglob('{0}/*.json'.format(self.data_dir)):
            self.assertEqual(os.path.basename(user_file), 'foo.json')
            with open(user_file, 'rb') as user_data:
                data = json.load(user_data)
                self.assertIn('timestamp', data.keys())
                for key in payload.keys():
                    self.assertEqual(payload[key], data[key])
