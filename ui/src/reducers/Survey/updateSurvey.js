// ----
// Action types
export const RECEIVE_UPDATE_SURVEY = 'RECEIVE_UPDATE_SURVEY'

// ----

// ------------------------------------
// Actions
// ------------------------------------

export function receiveUpdateSurvey (data) {
  return { type: RECEIVE_UPDATE_SURVEY, data }
}


// updates the survey data
export function updateSurvey (data) {
  return function (dispatch) {
    dispatch(receiveUpdateSurvey(data))
  }
}
