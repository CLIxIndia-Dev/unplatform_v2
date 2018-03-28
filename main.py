#!/bin/sh
# pylint: disable=assigning-non-slot,duplicate-code
from __future__ import unicode_literals, print_function

import codecs
import functools
import json
import mimetypes
import os
import sqlite3
import string
import sys
import time
import urllib

from datetime import datetime
from natsort import natsorted
from requests.exceptions import ConnectionError

import requests
import web
from web.wsgiserver import CherryPyWSGIServer

import settings
import utilities
from main_utilities import get_configuration_file, set_configuration_file,\
    set_user_data_file
from star_logo_nova import SLNProject, SLNProjects, sln_shared

# http://pythonhosted.org/PyInstaller/runtime-information.html#run-time-information
if getattr(sys, 'frozen', False):
    ABS_PATH = os.path.dirname(sys.executable)
else:
    PROJECT_PATH = os.path.dirname(os.path.abspath(__file__))
    ABS_PATH = '{0}/unplatform_v2'.format(
        os.path.abspath(os.path.join(PROJECT_PATH, os.pardir)))

CherryPyWSGIServer.ssl_certificate_chain = ''
try:
    # pylint: disable=protected-access
    CherryPyWSGIServer.ssl_certificate = \
        "{0}/unplatform/unplatform.cert.dummy.pem".format(sys._MEIPASS)
    CherryPyWSGIServer.ssl_private_key = \
        "{0}/unplatform/unplatform.key.dummy.pem".format(sys._MEIPASS)
except AttributeError:
    # pylint: disable=protected-access
    CherryPyWSGIServer.ssl_certificate = \
        "{0}/unplatform/unplatform.cert.dummy.pem".format(ABS_PATH)
    CherryPyWSGIServer.ssl_private_key = \
        "{0}/unplatform/unplatform.key.dummy.pem".format(ABS_PATH)


web.config.debug = False

urls = (
    '/api/v1/configuration/?', 'configuration',
    '/api/v1/session/?', 'user_session',
    '/api/appdata/?', 'generic_logging',
    '/datastore_path/?', 'bootloader_storage_path',
    '/version/?', 'version',
    '/modules_list/?', 'modules_list',
    '/oea/(.*)/?', 'oea_tool',
    '/oea/?', 'oea_tool',
    # These are for StarLogoNova
    '/editor/(.*)/?', 'star_logo_nova',
    '/editor/?', 'star_logo_nova',
    '/api/projects/?', 'sln_projects',
    '/api/project/(.*)/remixes/?', 'sln_remix_project',
    '/api/project/(.*[^/])/?', 'sln_project',
    # End SLN endpoints
    '/common/(.*)', 'common_tools',
    '/content/(.*)', 'content',
    '/reset_session/?', 'reset_session',
    '/(.*)', 'index'
)
app = web.application(urls, locals())


# To fix static file issue with OS X bundle
# https://stackoverflow.com/a/11274226
os.chdir(ABS_PATH)


web.config.session_parameters['cookie_name'] = 'unplatform_session_id'
web.config.session_parameters['ignore_expiry'] = False
web.config.session_parameters['timeout'] = 20 * 60  # 20 minutes of inactivity

# store sessions in SQLite3, because we're running into concurrency issues
# when using filesystem
DB_PATH = os.path.join(ABS_PATH, 'unplatform.sqlite3')
db = web.database(dbn='sqlite', db=DB_PATH)
store = web.session.DBStore(db, 'sessions')

connection = sqlite3.connect(DB_PATH)
connection.execute('PRAGMA journal_mode=WAL;')

session = web.session.Session(app,
                              store,
                              initializer={'login': 0, 'survey': {}})


def list_dir(root, directory, current_level=0, max_level=4):
    # recursively list the directories under modules. Set limit to 4, given how
    # the epubs are structured, but let's make that an option
    # Tools will show up with an extra level of depth.
    # Sample output:
    # ['modules/English Elementary', 'modules/English Elementary/G9',
    #       'modules/English Elementary/G9/U1',
    #  'modules/Tools', 'modules/Tools/Bio- Mechanic',
    #       'modules/Tools/Open Story',
    #  'modules/Tools/Open Story/css', 'modules/Tools/Open Story/fonts',
    #       'modules/Tools/Physics Video Player',
    #  'modules/Tools/Police Quad', 'modules/Tools/Turtle Blocks']
    sub_dirs = []
    if current_level < max_level:
        if (os.path.isdir('{0}/{1}'.format(root, directory)) and
                not directory.startswith('.')):
            for sub_dir in os.listdir('{0}/{1}'.format(root, directory)):
                new_sub_dir = '{0}/{1}'.format(directory, sub_dir)
                full_sub_dir_path = '{0}/{1}'.format(root, new_sub_dir)
                if (not sub_dir.startswith('.') and
                        os.path.isdir(full_sub_dir_path)):
                    sub_dirs.append(new_sub_dir)
                    sub_dirs += list_dir(root,
                                         new_sub_dir,
                                         current_level=current_level + 1)
            sub_dirs = natsorted(sub_dirs)
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
            with open('{0}/templates/session_expired.html'.format(ABS_PATH),
                      'rb') as session_template:
                raise web.Forbidden(session_template.read())
        results = func(self, *args)
        return results
    return wrapper


class bootloader_storage_path:
    def GET(self):
        return ABS_PATH


class index:
    @utilities.format_html_response
    # pylint: disable=unused-argument
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
                'description': 'For logging info from unplatform and ' +
                               'tools, which do not know about catalog IDs',
                'genusTypeId': settings.DEFAULT_LOG_GENUS_TYPE
            }
            req = requests.post(url, json=payload, verify=False)
            default_log = req.json()
        return default_log

    @require_login
    @utilities.format_response
    def GET(self):
        try:
            default_log = self._get_log()
        except ConnectionError:
            return []
        else:
            url = '{0}/{1}/logentries'.format(settings.QBANK_LOGGING_ENDPOINT,
                                              default_log['id'])
            req = requests.get(url, verify=False)
            log_entries = req.json()
            return log_entries

    @require_login
    @utilities.format_response
    def POST(self):
        # get or find a default log genus type
        try:
            default_log = self._get_log()
        except ConnectionError:
            return {"msg": "No QBank connection, nothing logged"}
        else:
            received_data = web.data()
            if isinstance(received_data, basestring):
                try:
                    received_data = json.loads(received_data)
                except TypeError:
                    pass

            payload = {
                'data': received_data
            }
            log_entry_url = '{0}/{1}/logentries'.format(
                settings.QBANK_LOGGING_ENDPOINT,
                default_log['id'])
            session_id = 'none_provided'
            if 'session_id' in received_data:
                session_id = received_data['session_id']
            elif 'sessionId' in received_data:
                session_id = received_data['sessionId']
            elif 'user_id' in received_data:
                session_id = received_data['user_id']
            elif 'userId' in received_data:
                session_id = received_data['userId']

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
        tool_file = '{0}/modules/Tools/{1}/index.html'.format(
            ABS_PATH, tool_name)
        if not os.path.isfile(tool_file):
            yield web.notfound("Sorry, that tool was not found.")
        else:
            with open(tool_file, 'rb') as tool:
                if 'lang' in web.input():
                    template = string.Template(tool.read())
                    yield template.substitute({
                        'lang': web.input()['lang']
                    })
                else:
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
    # remove this for performance...behavior should be the same, because
    # whenever content logs to the generic logging API, that will check
    # logged in state.
    # @require_login
    # pylint: disable=too-many-locals
    def GET(self, path=None):
        full_path = os.path.join(ABS_PATH, 'modules', path)
        if not os.path.isfile(full_path):
            yield web.notfound("Sorry, {0} was not found".format(path))
        else:
            url = urllib.pathname2url(full_path)
            mimetype = mimetypes.guess_type(url)
            web.header('Content-Type', mimetype[0])

            if url.endswith('css'):
                web.header('Content-Type', 'text/css')
            # web.header('Content-Length', os.path.getsize(full_path))
            web.header('Accept-Ranges', 'bytes')

            file_handle = codecs.open(full_path, 'r', encoding='utf-8')
            try:
                file_handle.read()
            except UnicodeDecodeError:
                file_handle = open(full_path, 'rb')
            file_handle.seek(0)

            # The algorithm below for streaming partial content was
            # based off of this post:
            # https://benramsey.com/blog/2008/05/206-partial-content-and-range-requests/

            continue_with_stream = True
            byte_range = utilities.get_byte_ranges()
            total_bytes_to_read = os.path.getsize(file_handle.name)
            content_length = os.path.getsize(file_handle.name)
            bytes_to_throw_away = 0
            if byte_range is not None:
                bytes_to_throw_away = int(byte_range[0])
                if (bytes_to_throw_away > total_bytes_to_read or
                        bytes_to_throw_away < 0):
                    web.ctx.status = '416 Requested Range Not Satisfiable'
                    continue_with_stream = False
                    yield ''
                file_handle.read(bytes_to_throw_away)
                total_bytes_to_read = os.path.getsize(
                    file_handle.name
                ) - bytes_to_throw_away
                if byte_range[1] != '':
                    total_bytes_to_read = int(
                        byte_range[1]
                    ) - bytes_to_throw_away

            bytes_read = 0

            num_bytes_to_read = 1024 * 8
            starting_bytes = bytes_to_throw_away
            web.ctx.status = '206 Partial Content'

            while continue_with_stream:
                remaining_bytes = total_bytes_to_read - bytes_read
                bytes_to_read = min(num_bytes_to_read, remaining_bytes)
                buf = file_handle.read(bytes_to_read)
                if not buf:
                    break

                # web.header('Content-Length', str(bytes_to_read))
                web.header('Content-Range', 'bytes {0}-{1}/{2}'.format(
                    str(starting_bytes),
                    str(starting_bytes + bytes_to_read),
                    str(content_length)))

                bytes_read += bytes_to_read
                starting_bytes += bytes_to_read
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
    """ Opens up the OpenEmbeddedAssessments player """
    @require_login
    @utilities.format_html_response
    # pylint: disable=unused-argument
    def GET(self, path=None):
        oea_file_path = '{0}/static/oea/index.html'.format(ABS_PATH)
        with open(oea_file_path, 'rb') as oea_index:
            yield oea_index.read()


class star_logo_nova:
    """ Opens up the StarLogoNova editor """
    @utilities.format_html_response
    # pylint: disable=unused-argument
    def GET(self, path=None):
        sln_file_path = '{0}/static/editor/editor.html'.format(ABS_PATH)
        with open(sln_file_path, 'rb') as sln_index:
            yield sln_index.read()


class sln_projects(sln_shared, utilities.BaseClass):
    """ Shows the list of available StarLogoNova projects """
    @utilities.format_response
    def GET(self):
        """ get all StarLogoNova projects """
        bank = self.get_or_create_bank()
        offered = self.get_or_create_assessment_offered(bank['id'])
        req = requests.get(self.results_url(bank['id'], offered['id']),
                           verify=False)
        return SLNProjects(req.json()).serialize

    @utilities.format_response
    def POST(self):
        """ create a new StarLogoNova project """
        data = self.data()
        data['user_id'] = '{0}--{1}'.format(session.session_id,
                                            str(time.time()))
        bank = self.get_or_create_bank()
        offered = self.get_or_create_assessment_offered(bank['id'])
        taken = self.create_assessment_taken(bank['id'],
                                             offered['id'],
                                             data)
        return SLNProject(taken).serialize


class sln_remix_project(sln_shared, utilities.BaseClass):
    """ Create a remix project """
    @utilities.format_response
    def POST(self, project_id):
        """ create a new StarLogoNova remixed project from an existing one """
        data = self.data()
        data['user_id'] = '{0}--{1}'.format(session.session_id,
                                            str(time.time()))
        data['provenanceId'] = utilities.escape(project_id)
        bank = self.get_or_create_bank()

        if 'title' not in data or 'description' not in data:
            taken = self.get_assessment_taken(bank['id'], project_id)
            project = SLNProject(taken)
            if 'title' not in data:
                data['title'] = 'Copy of {0}'.format(project.title)
            if 'description' not in data:
                data['description'] = project.description

        offered = self.get_or_create_assessment_offered(bank['id'])
        taken = self.create_assessment_taken(bank['id'],
                                             offered['id'],
                                             data)
        return SLNProject(taken).serialize


class sln_project(sln_shared, utilities.BaseClass):
    """ Manage a specific StarLogoNova project """
    @utilities.format_response
    def PATCH(self, project_id):
        """ Save the data for an existing StarLogoNova project """
        data = self.data()
        bank = self.get_or_create_bank()
        taken = self.update_assessment_taken(bank['id'],
                                             project_id,
                                             data)
        return SLNProject(taken).serialize

    @utilities.format_response
    def GET(self, project_id):
        """ get the specific project """
        bank = self.get_or_create_bank()
        taken = self.get_assessment_taken(bank['id'], project_id)
        return SLNProject(taken).serialize


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
