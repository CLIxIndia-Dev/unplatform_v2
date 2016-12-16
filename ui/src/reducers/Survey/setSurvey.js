import axios from 'axios'

// ----
// Action types
export const RECEIVE_SET_SURVEY = 'RECEIVE_SET_SURVEY'
export const SET_SURVEY_OPTIMISTIC = 'SET_SURVEY_OPTIMISTIC'

// ----

// ------------------------------------
// Actions
// ------------------------------------

export function receiveSetSurvey (sessionId) {
  return { type: RECEIVE_SET_SURVEY, sessionId }
}

export function setSurveyOptimistic (data) {
  return { type: SET_SURVEY_OPTIMISTIC, data }
}

// sets the current session survey info
export function setSurvey (data) {
  return function (dispatch) {
    // console.log(data)
    dispatch(setSurveyOptimistic(data))
    let options = {
      url: '/api/v1/session',
      method: 'post',
      data: data
    }
    return axios(options)
    .then((response) => {
      // console.log(response.data)
      dispatch(receiveSetSurvey(response.data.sessionId))
    })
    .catch((error) => {
      console.log('error setting survey into session', error)
    })
  }
}
