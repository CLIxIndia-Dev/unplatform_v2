// sln reducer, to save new StarLogoNova models
import _ from 'lodash'

import {
  RECEIVE_CREATE_LOCKED_MODEL,
  CREATE_LOCKED_MODEL_OPTIMISTIC
} from './createLockedModel'

import { RECEIVE_UPDATE_MODEL_FORM } from './updateModelForm'
// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  form: {
    title: null,
    description: null,
    projectStr: null
  },
  saving: false
}
export default function slnReducer (state = initialState, action) {
  switch (action.type) {
    case CREATE_LOCKED_MODEL_OPTIMISTIC:
      return _.assign({}, state, {
        saving: true
      })

    case RECEIVE_CREATE_LOCKED_MODEL:
      return _.assign({}, state, {
        form: {
          title: null,
          description: null,
          projectStr: null
        },
        saving: false
      })

    case RECEIVE_UPDATE_MODEL_FORM:
      return _.assign({}, state, {
        form: action.data
      })

    default:
      return state
  }
}
