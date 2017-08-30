import functools
import json
import web


CORS_HEADERS = "Content-Type,Authorization,X-Api-Proxy,X-Api-Key,request-line,X-Api-Locale"


class BaseClass:
    def __init__(self):
        pass

    # pylint: disable=unused-argument
    def OPTIONS(self, *args, **kwargs):
        # https://www.youtube.com/watch?v=gZelOtYjYv8
        web.header("Access-Control-Allow-Origin", "*")
        web.header("Access-Control-Allow-Credentials", "true")
        web.header("Access-Control-Allow-Headers", CORS_HEADERS)
        web.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE")
        web.header("Access-Control-Max-Age", "1728000")
        return

    @staticmethod
    def data():
        try:
            return json.loads(web.data())
        except (ValueError, TypeError):
            return {}


def format_html_response(func):
    """set html header"""
    @functools.wraps(func)
    def wrapper(self, *args):
        results = func(self, *args)
        web.header('Content-type', 'text/html')
        return results
    return wrapper


def format_response(func):
    """set json header and convert response to json string"""
    @functools.wraps(func)
    def wrapper(self, *args):
        results = func(self, *args)
        web.header('Content-type', 'application/json')
        web.header("Access-Control-Allow-Origin", "*")
        web.header("Access-Control-Allow-Credentials", "true")
        web.header("Access-Control-Allow-Headers", CORS_HEADERS)
        web.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE")
        web.header("Access-Control-Max-Age", "1728000")
        if isinstance(results, dict) or isinstance(results, list):
            return json.dumps(results)
        else:
            return results
    return wrapper


def format_xml_response(func):
    """set json header and convert response to json string"""
    @functools.wraps(func)
    def wrapper(self, *args):
        results = func(self, *args)
        web.header('Content-type', 'application/xml')
        web.header("Access-Control-Allow-Origin", "*")
        web.header("Access-Control-Allow-Credentials", "true")
        web.header("Access-Control-Allow-Headers", CORS_HEADERS)
        web.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE")
        web.header("Access-Control-Max-Age", "1728000")
        if isinstance(results, dict):
            return json.dumps(results)
        else:
            return results
    return wrapper


def allow_cors(func):
    """set cors headers"""
    @functools.wraps(func)
    def wrapper(self, *args):
        results = func(self, *args)
        web.header("Access-Control-Allow-Origin", "*")
        web.header("Access-Control-Allow-Credentials", "true")
        web.header("Access-Control-Allow-Headers", CORS_HEADERS)
        web.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE")
        web.header("Access-Control-Max-Age", "1728000")
        return results
    return wrapper


def get_byte_ranges():
    if 'HTTP_RANGE' in web.ctx.env:
        return web.ctx.env['HTTP_RANGE'].split('=')[-1].split('-')
    return None
