import axios from 'axios'
// ----
// Action types
export const RECEIVE_CLEAR_SURVEY = 'RECEIVE_CLEAR_SURVEY'
export const CLEAR_SURVEY_OPTIMISTIC = 'CLEAR_SURVEY_OPTIMISTIC'

// ----

// ------------------------------------
// Actions
// ------------------------------------

export function receiveClearSurvey (data) {
  return { type: RECEIVE_CLEAR_SURVEY, data }
}

export function clearSurveyOptimistic (data) {
  return { type: CLEAR_SURVEY_OPTIMISTIC, data}
}


// clears the survey data and resets the session on the server
export function clearSurvey (data) {
  return function (dispatch) {
    dispatch(clearSurveyOptimistic())

    let options = {
      url: '/reset_session'
    }
    return axios(options)
    .then((response) => {
      dispatch(receiveClearSurvey(data))
    })
    .catch((error) => {
      console.log('error clearing the server session', error)
    })
  }
}
