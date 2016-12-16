// module reducer, so we can get the directory structure of the
// /modules folder
import _ from 'lodash'

import { GET_MODULES_OPTIMISTIC, RECEIVE_MODULES } from './getModules'
import { RECEIVE_FLUSH_MODULES } from './flushModules'

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {}
export default function moduleReducer (state = initialState, action) {
  switch (action.type) {
    case GET_MODULES_OPTIMISTIC:
    case RECEIVE_FLUSH_MODULES:
      return _.assign({}, state, {
        modules: null
      })

    case RECEIVE_MODULES:
      return _.assign({}, state, {
        modules: action.modules
      })

    default:
      return state
  }
}
