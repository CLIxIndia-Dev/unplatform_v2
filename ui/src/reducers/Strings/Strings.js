// strings reducer, to get the strings in the right locale
import _ from 'lodash'

import strings from '../../locale'

import { RECEIVE_LOCALIZED_STRINGS } from './localizeStrings'

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
}
export default function stringsReducer (state = initialState, action) {
  switch (action.type) {
    case RECEIVE_LOCALIZED_STRINGS:
      return _.assign({}, state, {
        strings: action.strings
      })

    default:
      return state
  }
}
