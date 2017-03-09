import _ from 'lodash'
import axios from 'axios'

// ----
// Action types
export const RECEIVE_MODULES = 'RECEIVE_MODULES'
export const GET_MODULES_OPTIMISTIC = 'GET_MODULES_OPTIMISTIC'

// ----

// ------------------------------------
// Actions
// ------------------------------------

export function receiveModules (modules) {
  return { type: RECEIVE_MODULES, modules }
}

export function getModulesOptimistic (data) {
  return { type: GET_MODULES_OPTIMISTIC, data }
}

// returns the directories in the /modules folder
export function getModules () {
  return function (dispatch) {
    dispatch(getModulesOptimistic())

    let options = {
      url: '/modules_list'
    }
    return axios(options)
    .then((response) => {
      // let's massage this somehow into a set of modules / grades / topics / lessons
      // vs tools
      // console.log('response data', response.data)
      if (_.isString(response.data)) {
        // Most likely a "Session expired" string
        // So we need to send this back as null,
        //   since that is how our sessionExpiration Middleware
        //   is going to catch it
        dispatch(receiveModules())
        return
      }

      let modules = {}

      let cleanData = _.map(response.data, (dir) => {
        return dir.replace('modules/', '')
      })

      // is there some way to do this recursively?
      _.each(cleanData, (dir) => {
        let folders = dir.split('/')
        if (_.keys(modules).indexOf(folders[0]) < 0) {
          modules[folders[0]] = {}
        }

        if (folders.length >= 2) {
          if (_.keys(modules[folders[0]]).indexOf(folders[1]) < 0) {
            modules[folders[0]][folders[1]] = {}
          }

          if (folders.length >= 3) {
            if (_.keys(modules[folders[0]][folders[1]]).indexOf(folders[2]) < 0) {
              modules[folders[0]][folders[1]][folders[2]] = {}
            }

            // we should never have more than this depth...
            if (folders.length >= 4) {
              if (_.keys(modules[folders[0]][folders[1]][folders[2]]).indexOf(folders[3]) < 0) {
                modules[folders[0]][folders[1]][folders[2]][folders[3]] = {}
              }
            }
          }
        }
      })
      dispatch(receiveModules(modules))
    })
    .catch((error) => {
      console.log('error getting modules', error)
    })
  }
}
