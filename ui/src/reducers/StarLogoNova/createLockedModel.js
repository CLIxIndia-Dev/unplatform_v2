import axios from 'axios'
import _ from 'lodash'

// ----
// Action types
export const RECEIVE_CREATE_LOCKED_MODEL = 'RECEIVE_CREATE_LOCKED_MODEL'
export const CREATE_LOCKED_MODEL_OPTIMISTIC = 'CREATE_LOCKED_MODEL_OPTIMISTIC'

// ----

// ------------------------------------
// Actions
// ------------------------------------

export function receiveCreateLockedModel (newModel) {
  return { type: RECEIVE_CREATE_LOCKED_MODEL, newModel }
}

export function createLockedModelOptimistic (data) {
  return { type: CREATE_LOCKED_MODEL_OPTIMISTIC, data }
}

// creates a read-only StarLogoNova model
export function createLockedModel (data) {
  const keys = _.keys(data)
  if (!_.includes(keys, 'projectStr')) {
    throw new Error('data must include a project string')
  }
  if (!_.includes(keys, 'title')) {
    throw new Error('data must include a title')
  }
  if (!_.includes(keys, 'description')) {
    throw new Error('data must include a description')
  }

  // Needs to match the value in repo's settings.py
  //  for ``READ_ONLY_TAKEN_GENUS_TYPE``
  data['genusTypeId'] = 'assessment-taken-genus-type%3Astar-logo-nova-read-only%40ODL.MIT.EDU'

  // Get this into the format required by the server ...
  data['project_str'] = data['projectStr']
  delete data['projectStr']

  return function (dispatch) {
    // console.log(data)
    // console.log('optimistic save')
    dispatch(createLockedModelOptimistic(data))
    let options = {
      url: '/api/projects',
      method: 'post',
      data: data
    }
    return axios(options)
    .then((response) => {
      // console.log('got a response', response.data)
      dispatch(receiveCreateLockedModel(response.data))
    })
    .catch((error) => {
      console.log('error creating a read-only SLN model', error)
    })
  }
}
