# pylint: disable=duplicate-code
import json
import sys
import os

# from nose.tools import *
# from paste.fixture import TestApp
from unittest import TestCase
from webtest import TestApp

from main import app
from session_migration import create_session_database

if getattr(sys, 'frozen', False):
    ABS_PATH = os.path.dirname(sys.executable)
else:
    PROJECT_PATH = os.path.dirname(os.path.abspath(__file__))
    ABS_PATH = '{0}/unplatform_v2'.format(os.path.abspath(os.path.join(PROJECT_PATH, os.pardir)))

SESSIONS_DB = os.path.join(ABS_PATH, 'unplatform.sqlite3')


class BaseTestCase(TestCase):
    def code(self, _req, _code):
        self.assertIn(str(_code), _req.status)

    def json(self, _req):
        return json.loads(_req.body)

    def login(self):
        url = '/api/v1/session'
        payload = {
            'userType': 'test user'
        }
        self.app.post(url,
                      params=json.dumps(payload),
                      headers={'content-type': 'application/json'})

    def logout(self):
        url = '/reset_session'
        self.app.get(url)

    def message(self, _req, _msg):
        self.assertIn(_msg, str(_req.body))

    def ok(self, _req):
        self.assertIn('200', _req.status)

    def setUp(self):
        middleware = []
        self.app = TestApp(app.wsgifunc(*middleware))
        if os.path.isfile(SESSIONS_DB):
            os.remove(SESSIONS_DB)
        create_session_database()
        self.logout()

    def tearDown(self):
        self.logout()
        if os.path.isfile(SESSIONS_DB):
            os.remove(SESSIONS_DB)
