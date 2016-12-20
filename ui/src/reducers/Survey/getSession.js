import axios from 'axios'

let Cookies = require('cookies-js')
// ----
// Action types
export const RECEIVE_GET_SESSION = 'RECEIVE_GET_SESSION'
export const GET_SESSION_OPTIMISTIC = 'GET_SESSION_OPTIMISTIC'

// ----

// ------------------------------------
// Actions
// ------------------------------------

export function receiveGetSession (sessionId) {
  return { type: RECEIVE_GET_SESSION, sessionId }
}

export function getSessionOptimistic (data) {
  return { type: GET_SESSION_OPTIMISTIC, data }
}

export function getSession () {
  return function (dispatch) {
    // console.log(data)
    dispatch(receiveGetSession(Cookies.get('session_id')))
    // dispatch(getSessionOptimistic())
    // let options = {
    //   url: '/api/v1/session',
    // }
    // return axios(options)
    // .then((response) => {
    //   // console.log(response.data)
    //   dispatch(receiveGetSession(response.data))
    // })
    // .catch((error) => {
    //   console.log('error getting sessionId', error)
    // })
  }
}
