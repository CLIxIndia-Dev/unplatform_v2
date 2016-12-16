import axios from 'axios'

// ----
// Action types
export const RECEIVE_GET_VERSION = 'RECEIVE_GET_VERSION'
export const GET_VERSION_OPTIMISTIC = 'GET_VERSION_OPTIMISTIC'

// ----

// ------------------------------------
// Actions
// ------------------------------------

export function receiveGetVersion (version) {
  return { type: RECEIVE_GET_VERSION, version }
}

export function getVersionOptimistic (data) {
  return { type: GET_VERSION_OPTIMISTIC, data }
}

export function getVersion () {
  return function (dispatch) {
    // console.log(data)
    dispatch(getVersionOptimistic())
    let options = {
      url: '/version',
    }
    return axios(options)
    .then((response) => {
      // console.log(response.data)
      dispatch(receiveGetVersion(response.data))
    })
    .catch((error) => {
      console.log('error getting version', error)
    })
  }
}
