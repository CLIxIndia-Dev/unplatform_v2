from mock import patch

from utilities import escape,\
    allow_cors,\
    get_byte_ranges,\
    format_xml_response,\
    format_response,\
    BaseClass,\
    CORS_HEADERS,\
    CORS_METHODS


class TestBaseClass:
    @patch('utilities.web')
    def test_options_call_sets_cors_headers(self,
                                            MockWeb):
        test_headers = {}

        def header(key, value):
            test_headers[key] = value

        MockWeb.header = header
        base_class = BaseClass()
        base_class.OPTIONS()
        assert test_headers['Access-Control-Allow-Origin'] == '*'
        assert test_headers['Access-Control-Allow-Credentials'] == 'true'
        assert test_headers['Access-Control-Allow-Headers'] == CORS_HEADERS
        assert test_headers['Access-Control-Allow-Methods'] == CORS_METHODS
        assert test_headers['Access-Control-Max-Age'] == '1728000'

    @patch('utilities.web')
    def test_data_returns_empty_string_if_invalid_json(self,
                                                       MockWeb):
        MockWeb.data.return_value = 123
        base_class = BaseClass()
        assert base_class.data() == {}


class TestWrappers:
    @patch('utilities.web')
    def test_format_response_returns_non_json(self,
                                              MockWeb):
        test_headers = {}

        def header(key, value):
            test_headers[key] = value

        # pylint: disable=unused-argument
        @format_response
        def test_method(*args):
            return 123

        MockWeb.header = header
        assert test_method(None) == 123

    @patch('utilities.web')
    def test_format_xml_response_sets_xml_content_type(self,
                                                       MockWeb):
        test_headers = {}

        def header(key, value):
            test_headers[key] = value

        # pylint: disable=unused-argument
        @format_xml_response
        def test_method(*args):
            return

        MockWeb.header = header
        test_method(None)
        assert test_headers['Content-type'] == 'application/xml'
        assert test_headers['Access-Control-Allow-Origin'] == '*'
        assert test_headers['Access-Control-Allow-Credentials'] == 'true'
        assert test_headers['Access-Control-Allow-Headers'] == CORS_HEADERS
        assert test_headers['Access-Control-Allow-Methods'] == CORS_METHODS
        assert test_headers['Access-Control-Max-Age'] == '1728000'

    @patch('utilities.web')
    def test_format_xml_response_returns_non_json(self,
                                                  MockWeb):
        test_headers = {}

        def header(key, value):
            test_headers[key] = value

        # pylint: disable=unused-argument
        @format_xml_response
        def test_method(*args):
            return 123

        MockWeb.header = header
        assert test_method(None) == 123

    @patch('utilities.web')
    def test_allow_cors_sets_expected_headers(self,
                                              MockWeb):
        test_headers = {}

        def header(key, value):
            test_headers[key] = value

        # pylint: disable=unused-argument
        @allow_cors
        def test_method(*args):
            return

        MockWeb.header = header
        test_method(None)
        assert test_headers['Access-Control-Allow-Origin'] == '*'
        assert test_headers['Access-Control-Allow-Credentials'] == 'true'
        assert test_headers['Access-Control-Allow-Headers'] == CORS_HEADERS
        assert test_headers['Access-Control-Allow-Methods'] == CORS_METHODS
        assert test_headers['Access-Control-Max-Age'] == '1728000'


class TestUtilityMethods:
    def test_escape_works_for_unescaped_strings(self):
        assert escape('foo:1@odl') == 'foo%3A1%40odl'

    def test_escape_does_not_double_escape(self):
        assert escape('foo%3A2%40odl') == 'foo%3A2%40odl'

    @patch('web.ctx')
    def test_get_byte_ranges_returns_none_if_header_not_present(self,
                                                                MockCtx):
        MockCtx.env = {
            'foo': 'bar'
        }
        assert get_byte_ranges() is None

    @patch('web.ctx')
    def test_get_byte_range_returns_header_values(self,
                                                  MockCtx):
        MockCtx.env = {
            'HTTP_RANGE': 'bytes=0-100'
        }
        assert get_byte_ranges() == ['0', '100']
