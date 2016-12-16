// survey reducer, to get the user survey data
import _ from 'lodash'

import { RECEIVE_UPDATE_SURVEY } from './updateSurvey'
import { RECEIVE_CLEAR_SURVEY } from './clearSurvey'
import { SET_SURVEY_OPTIMISTIC, RECEIVE_SET_SURVEY } from './setSurvey'
import { GET_SESSION_OPTIMISTIC, RECEIVE_GET_SESSION } from './getSession'

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  data: {}
}
export default function surveyReducer (state = initialState, action) {
  switch (action.type) {
    case RECEIVE_CLEAR_SURVEY:
      return {data: {}}
      
    case RECEIVE_UPDATE_SURVEY:
      return _.assign({}, state, {
        data: action.data
      })

    case RECEIVE_SET_SURVEY:
    case RECEIVE_GET_SESSION:
      return _.assign({}, state, {
        sessionId: action.sessionId
      })

    case SET_SURVEY_OPTIMISTIC:
    case GET_SESSION_OPTIMISTIC:
      return _.assign({}, state, {
        sessionId: null
      })

    default:
      return state
  }
}
