// school configuration reducer, so we can get and set the
// school config
import _ from 'lodash'

import { GET_SCHOOL_CONFIGURATION_OPTIMISTIC, RECEIVE_SCHOOL_CONFIGURATION } from './getSchoolConfiguration'
import { SET_SCHOOL_CONFIGURATION_OPTIMISTIC, RECEIVE_SET_SCHOOL_CONFIGURATION } from './setSchoolConfiguration'
import { RECEIVE_UPDATE_SCHOOL_CONFIGURATION_FORM } from './updateSchoolConfigurationForm'

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  form: {
    state: null,
    district: null,
    locale: 'en',
    schoolId: null,
    terminalId: null
  }
}
export default function schoolConfigurationReducer (state = initialState, action) {
  switch (action.type) {
    case GET_SCHOOL_CONFIGURATION_OPTIMISTIC:
    case SET_SCHOOL_CONFIGURATION_OPTIMISTIC:
      return _.assign({}, state, {
        schoolConfiguration: action.configuration ? action.configuration : null
      })

    case RECEIVE_SCHOOL_CONFIGURATION:
    case RECEIVE_SET_SCHOOL_CONFIGURATION:
      return _.assign({}, state, {
        schoolConfiguration: action.configuration ? action.configuration : null
      })

    case RECEIVE_UPDATE_SCHOOL_CONFIGURATION_FORM:
      return _.assign({}, state, {
        form: action.data
      })

    default:
      return state
  }
}
