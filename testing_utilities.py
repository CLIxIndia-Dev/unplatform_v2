import os
import json
import sys
import glob

from nose.tools import *
from paste.fixture import TestApp
from unittest import TestCase

from main import app

if getattr(sys, 'frozen', False):
    ABS_PATH = os.path.dirname(sys.executable)
else:
    PROJECT_PATH = os.path.dirname(os.path.abspath(__file__))
    ABS_PATH = '{0}/unplatform_v2'.format(os.path.abspath(os.path.join(PROJECT_PATH, os.pardir)))

SESSIONS_DIR = os.path.join(ABS_PATH, 'webapps', 'CLIx', 'sessions')


class BaseTestCase(TestCase):
    """
    """
    @staticmethod
    def _filename(file_object):
        return file_object.name.split('/')[-1]

    def code(self, _req, _code):
        self.assertEqual(_req.status, _code)

    def created(self, _req):
        self.code(_req, 201)

    def deleted(self, _req):
        self.code(_req, 202)

    def json(self, _req):
        return json.loads(_req.body)

    def message(self, _req, _msg):
        self.assertIn(_msg, str(_req.body))

    def ok(self, _req):
        self.assertEqual(_req.status, 200)

    def setUp(self):
        middleware = []
        self.app = TestApp(app.wsgifunc(*middleware))
        for session_file in glob.iglob('{0}/*'.format(SESSIONS_DIR)):
            os.remove(session_file)

    def tearDown(self):
        for session_file in glob.iglob('{0}/*'.format(SESSIONS_DIR)):
            os.remove(session_file)
