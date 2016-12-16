import axios from 'axios'

// ----
// Action types
export const RECEIVE_UPDATE_SCHOOL_CONFIGURATION_FORM = 'RECEIVE_UPDATE_SCHOOL_CONFIGURATION_FORM'

// ----

// ------------------------------------
// Actions
// ------------------------------------

export function receiveUpdateSchoolConfiguration (data) {
  return { type: RECEIVE_UPDATE_SCHOOL_CONFIGURATION_FORM, data }
}


// updates the current school configuration
export function updateSchoolConfiguration (data) {
  return function (dispatch) {
    dispatch(receiveUpdateSchoolConfiguration(data))
  }
}
