#!/bin/sh
import json
import os
import sys
import web
import mimetypes
import urllib
import requests
import functools

from datetime import datetime

from web.wsgiserver import CherryPyWSGIServer

import utilities
from main_utilities import get_configuration_file, set_configuration_file,\
    set_user_data_file
import settings


# http://pythonhosted.org/PyInstaller/runtime-information.html#run-time-information
if getattr(sys, 'frozen', False):
    ABS_PATH = os.path.dirname(sys.executable)
else:
    PROJECT_PATH = os.path.dirname(os.path.abspath(__file__))
    ABS_PATH = '{0}/unplatform_v2'.format(os.path.abspath(os.path.join(PROJECT_PATH, os.pardir)))

CherryPyWSGIServer.ssl_certificate_chain = ''
try:
    CherryPyWSGIServer.ssl_certificate = "{0}/unplatform/unplatform.cert.dummy.pem".format(sys._MEIPASS)
    CherryPyWSGIServer.ssl_private_key = "{0}/unplatform/unplatform.key.dummy.pem".format(sys._MEIPASS)
except AttributeError:
    CherryPyWSGIServer.ssl_certificate = "{0}/unplatform/unplatform.cert.dummy.pem".format(ABS_PATH)
    CherryPyWSGIServer.ssl_private_key = "{0}/unplatform/unplatform.key.dummy.pem".format(ABS_PATH)


web.config.debug = False

urls = (
    '/api/v1/configuration', 'configuration',
    '/api/v1/session', 'user_session',
    '/api/appdata', 'generic_logging',
    '/datastore_path', 'bootloader_storage_path',
    '/version', 'version',
    '/modules_list', 'modules_list',
    '/oea/(.*)', 'oea_tool',
    '/oea', 'oea_tool',
    '/common/(.*)', 'common_tools',
    '/content/(.*)', 'content',
    '/reset_session', 'reset_session',
    '/(.*)', 'index'
)
app = web.application(urls, locals())

web.config.session_parameters['cookie_name'] = 'unplatform_session_id'
web.config.session_parameters['ignore_expiry'] = False
web.config.session_parameters['timeout'] = 15 * 60  # 15 minutes of inactivity

session = web.session.Session(app,
                              web.session.DiskStore('{0}/webapps/unplatform/sessions'.format(ABS_PATH)),
                              initializer={'login': 0, 'survey': {}})


def list_dir(root, directory, current_level=0, max_level=4):
    # recursively list the directories under modules. Set limit to 4, given how
    # the epubs are structured, but let's make that an option
    # Tools will show up with an extra level of depth.
    # Sample output:
    # ['modules/English Elementary', 'modules/English Elementary/G9', 'modules/English Elementary/G9/U1',
    #  'modules/Tools', 'modules/Tools/Bio- Mechanic', 'modules/Tools/Open Story',
    #  'modules/Tools/Open Story/css', 'modules/Tools/Open Story/fonts', 'modules/Tools/Physics Video Player',
    #  'modules/Tools/Police Quad', 'modules/Tools/Turtle Blocks']
    sub_dirs = []
    if current_level < max_level:
        if os.path.isdir('{0}/{1}'.format(root, directory)) and not directory.startswith('.'):
            for sub_dir in os.listdir('{0}/{1}'.format(root, directory)):
                new_sub_dir = '{0}/{1}'.format(directory, sub_dir)
                full_sub_dir_path = '{0}/{1}'.format(root, new_sub_dir)
                if not sub_dir.startswith('.') and os.path.isdir(full_sub_dir_path):
                    sub_dirs.append(new_sub_dir)
                    sub_dirs += list_dir(root, new_sub_dir, current_level=current_level + 1)
            sub_dirs.sort()
    return sub_dirs


def logged_in():
    """test if the user has "logged in" to the session"""
    if session.get('login', 0) == 1:
        return True
    return False


def require_login(func):
    """require user to be logged in; this needs to be in this file,
    otherwise the `session` object doesn't have all the right attributes"""
    @functools.wraps(func)
    def wrapper(self, *args):
        if not logged_in():
            with open('{0}/templates/session_expired.html'.format(ABS_PATH), 'rb') as session_template:
                raise web.Forbidden(session_template.read())
        results = func(self, *args)
        return results
    return wrapper


class bootloader_storage_path:
    def GET(self):
        return ABS_PATH


class index:
    @utilities.format_html_response
    def GET(self, path=None):
        # reset session on GET index
        # session.login = 0
        # session.kill()

        # render the unplatform v2 front-end
        index_file = '{0}/static/ui/index.html'.format(ABS_PATH)
        yield open(index_file, 'rb').read()


class generic_logging:
    def _get_log(self):
        url = settings.QBANK_LOGGING_ENDPOINT
        req = requests.get(url, verify=False)
        logs = req.json()
        default_log = None
        for log in logs:
            if log['genusTypeId'] == settings.DEFAULT_LOG_GENUS_TYPE:
                default_log = log
                break
        if default_log is None:
            payload = {
                'name': 'Default CLIx log',
                'description': 'For logging info from unplatform and tools, which do not know about catalog IDs',
                'genusTypeId': settings.DEFAULT_LOG_GENUS_TYPE
            }
            req = requests.post(url, json=payload, verify=False)
            default_log = req.json()
        return default_log

    @require_login
    @utilities.format_response
    def GET(self):
        default_log = self._get_log()
        url = '{0}/{1}/logentries'.format(settings.QBANK_LOGGING_ENDPOINT,
                                          default_log['id'])
        req = requests.get(url, verify=False)
        log_entries = req.json()
        return log_entries

    @require_login
    @utilities.format_response
    def POST(self):
        # get or find a default log genus type
        default_log = self._get_log()

        received_data = web.data()
        if isinstance(received_data, basestring):
            try:
                received_data = json.loads(received_data)
            except TypeError:
                pass

        payload = {
            'data': received_data
        }
        log_entry_url = '{0}/{1}/logentries'.format(settings.QBANK_LOGGING_ENDPOINT,
                                                    default_log['id'])
        session_id = 'none_provided'
        if 'session_id' in received_data:
            session_id = received_data['session_id']
        elif 'sessionId' in received_data:
            session_id = received_data['sessionId']

        req = requests.post(log_entry_url, json=payload, verify=False,
                            headers={'x-api-proxy': session_id})
        return req.json()


class reset_session:
    def GET(self):
        web.header('Content-type', 'text/plain')
        session.login = 0
        session.kill()
        return 'success'


class common_tools:
    # serve up the iframe pages in the modules/ directory,
    #  that then point to the actual tools, in static/
    @require_login
    @utilities.format_html_response
    def GET(self, tool_name=None):
        tool_file = '{0}/modules/Tools/{1}/index.html'.format(ABS_PATH, tool_name)
        if not os.path.isfile(tool_file):
            yield web.notfound("Sorry, that tool was not found.")
        else:
            with open(tool_file, 'rb') as tool:
                yield tool.read()


class configuration:
    @utilities.format_response
    def GET(self):
        return get_configuration_file()

    @utilities.format_response
    def POST(self):
        config = json.loads(web.data())
        config['timestamp'] = str(datetime.utcnow())
        return set_configuration_file(config)


class content:
    @require_login
    def GET(self, path=None):
        full_path = os.path.join(ABS_PATH, 'modules', path)
        if not os.path.isfile(full_path):
            yield web.notfound("Sorry, {0} was not found".format(path))
        else:
            url = urllib.pathname2url(full_path)
            mimetype = mimetypes.guess_type(url)
            web.header('Content-Type', mimetype[0])
            web.header('Content-Length', os.path.getsize(full_path))
            web.header('Accept-Ranges', 'bytes')
            with open(full_path, 'rb') as content_file:
                num_bytes_to_read = 1024 * 8
                while 1:
                    buf = content_file.read(num_bytes_to_read)
                    if not buf:
                        break
                    yield buf


class modules_list:
    @utilities.format_response
    def GET(self):
        # send the entire
        # file structure for /modules in one go, so that the
        # OS doesn't have to be re-walked every time.
        data = list_dir(ABS_PATH, 'modules')
        return data


class oea_tool:
    @require_login
    @utilities.format_html_response
    def GET(self, path=None):
        oea_file_path = '{0}/static/oea/index.html'.format(ABS_PATH)
        with open(oea_file_path, 'rb') as oea_index:
            yield oea_index.read()


class user_session:
    @require_login
    def GET(self):
        web.header('Content-type', 'text/plain')
        return session.session_id

    @utilities.format_response
    def POST(self):
        user_data = json.loads(web.data())
        user_data['timestamp'] = str(datetime.utcnow())
        if 'sessionId' not in user_data:
            user_data['sessionId'] = session.session_id
        if 'login' not in session:
            session.login = 0
        session.login = 1
        return set_user_data_file(user_data)


class version:
    def GET(self):
        web.header('Content-type', 'text/plain')
        with open('{0}/package.json'.format(ABS_PATH), 'rb') as package_json:
            package = json.load(package_json)
            return package['version']

################################################
# INITIALIZER
################################################


def is_test():
    if 'WEBPY_ENV' in os.environ:
        return os.environ['WEBPY_ENV'] == 'test'
    return False

if (not is_test()) and __name__ == "__main__":
    sys.argv.append('8888')
    app.run()
