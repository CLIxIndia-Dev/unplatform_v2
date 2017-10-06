# pylint: disable=duplicate-code
# util functions for the classes in main.py
import os
import sys
import json

if getattr(sys, 'frozen', False):
    ABS_PATH = os.path.dirname(sys.executable)
else:
    PROJECT_PATH = os.path.dirname(os.path.abspath(__file__))
    ABS_PATH = '{0}/unplatform_v2'.format(os.path.abspath(os.path.join(PROJECT_PATH, os.pardir)))

CONFIG_DIR = '{0}/webapps/unplatform/configuration'.format(ABS_PATH)
CONFIG_FILE = '{0}/config.json'.format(CONFIG_DIR)

USER_DATA_DIR = '{0}/webapps/unplatform/user_data'.format(ABS_PATH)


def get_configuration_file():
    if not os.path.isfile(CONFIG_FILE):
        return {}
    else:
        with open(CONFIG_FILE, 'rb') as config_file:
            return json.load(config_file)


def set_configuration_file(data):
    if not os.path.isdir(CONFIG_DIR):
        os.makedirs(CONFIG_DIR)
    with open(CONFIG_FILE, 'wb') as config_file:
        if not isinstance(data, dict):
            data = json.loads(data)
        json.dump(data, config_file)
    return data


def set_user_data_file(data):
    if not os.path.isdir(USER_DATA_DIR):
        os.makedirs(USER_DATA_DIR)
    if not isinstance(data, dict):
        data = json.loads(dict)
    user_file = '{0}/{1}.json'.format(USER_DATA_DIR,
                                      data['sessionId'])
    with open(user_file, 'wb') as user_file:
        json.dump(data, user_file)
    return data
