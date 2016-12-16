import axios from 'axios'

// ----
// Action types
export const RECEIVE_SET_SCHOOL_CONFIGURATION = 'RECEIVE_SET_SCHOOL_CONFIGURATION'
export const SET_SCHOOL_CONFIGURATION_OPTIMISTIC = 'SET_SCHOOL_CONFIGURATION_OPTIMISTIC'

// ----

// ------------------------------------
// Actions
// ------------------------------------

export function receiveSetSchoolConfiguration (configuration) {
  return { type: RECEIVE_SET_SCHOOL_CONFIGURATION, configuration }
}

export function setSchoolConfigurationOptimistic (configuration) {
  return { type: SET_SCHOOL_CONFIGURATION_OPTIMISTIC, configuration }
}

// sets the current school configuration
export function setSchoolConfiguration (data) {
  return function (dispatch) {
    dispatch(setSchoolConfigurationOptimistic(data))
    let options = {
      url: '/api/v1/configuration',
      method: 'post',
      data: data
    }
    return axios(options)
    .then((response) => {
      console.log(response.data)
      dispatch(receiveSetSchoolConfiguration(response.data))
    })
    .catch((error) => {
      console.log('error setting school configuration', error)
    })
  }
}
