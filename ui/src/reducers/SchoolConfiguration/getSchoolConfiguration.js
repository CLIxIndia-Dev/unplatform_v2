import axios from 'axios'

// ----
// Action types
export const RECEIVE_SCHOOL_CONFIGURATION = 'RECEIVE_SCHOOL_CONFIGURATION'
export const GET_SCHOOL_CONFIGURATION_OPTIMISTIC = 'GET_SCHOOL_CONFIGURATION_OPTIMISTIC'

// ----

// ------------------------------------
// Actions
// ------------------------------------

export function receiveSchoolConfiguration (configuration) {
  return { type: RECEIVE_SCHOOL_CONFIGURATION, configuration }
}

export function getSchoolConfigurationOptimistic (data) {
  return { type: GET_SCHOOL_CONFIGURATION_OPTIMISTIC, data }
}

// gets the current school configuration
export function getSchoolConfiguration () {
  return function (dispatch) {
    dispatch(getSchoolConfigurationOptimistic())
    let options = {
      url: '/api/v1/configuration'
    }
    return axios(options)
    .then((response) => {
      // console.log(response.data)

      // TODO: Save this in local storage
      dispatch(receiveSchoolConfiguration(response.data))
    })
    .catch((error) => {
      console.log('error getting school configuration', error)
    })
  }
}
