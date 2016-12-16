import Lockr from 'lockr'

// ----
// Action types
export const RECEIVE_FLUSH_MODULES = 'RECEIVE_FLUSH_MODULES'

// ----

// ------------------------------------
// Actions
// ------------------------------------

export function receiveFlushModules () {
  return { type: RECEIVE_FLUSH_MODULES }
}

export function flushModules () {
  return function (dispatch) {
    Lockr.flush()
    dispatch(receiveFlushModules())
  }
}
