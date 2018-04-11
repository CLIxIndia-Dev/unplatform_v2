// ----
// Action types
export const RECEIVE_UPDATE_MODEL_FORM = 'RECEIVE_UPDATE_MODEL_FORM'

// ----

// ------------------------------------
// Actions
// ------------------------------------

export function receiveUpdateForm (data) {
  return { type: RECEIVE_UPDATE_MODEL_FORM, data }
}


// updates the model form
export function updateModelForm (data) {
  return function (dispatch) {
    dispatch(receiveUpdateForm(data))
  }
}
