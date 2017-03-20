// version reducer, to get the unplatform version
import _ from 'lodash'

import { GET_VERSION_OPTIMISTIC, RECEIVE_GET_VERSION } from './getVersion'

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  data: {}
}
export default function versionReducer (state = initialState, action) {
  switch (action.type) {
    case RECEIVE_GET_VERSION:
      return _.assign({}, state, {
        version: action.version ? action.version : null
      })

    case GET_VERSION_OPTIMISTIC:
      return _.assign({}, state, {
        version: null
      })

    default:
      return state
  }
}
