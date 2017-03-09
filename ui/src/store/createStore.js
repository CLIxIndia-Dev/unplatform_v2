import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import { browserHistory } from 'react-router'
import makeRootReducer from './reducers'
import { updateLocation } from './location'

import { RECEIVE_MODULES } from '../reducers/Module/getModules'
import { RECEIVE_SCHOOL_CONFIGURATION } from '../reducers/SchoolConfiguration/getSchoolConfiguration'
import { RECEIVE_GET_VERSION } from '../reducers/Version/getVersion'

// import persistState from 'redux-localstorage'

// Middleware to catch "Session expired" messages and
//   reroute to the root URL
const sessionExpiration = store => next => action => {
  const actionsToFilter = [RECEIVE_MODULES,
    RECEIVE_SCHOOL_CONFIGURATION,
    RECEIVE_GET_VERSION]
  let result = next(action)
  let returnedData
  if (result.version) {
    returnedData = result.version
  } else if (result.configuration) {
    returnedData = result.configuration
  } else if (result.modules) {
    returnedData = result.modules
  }
  console.log('result', result)
  console.log('returnedData', returnedData)
  if (actionsToFilter.indexOf(result.type) >= 0 &&
      !returnedData) {
    console.log('expired session! reroute here')
    browserHistory.push('/')
    return ''
  }
  return result
}

export default (initialState = {}) => {
  // ======================================================
  // Middleware Configuration
  // ======================================================
  const middleware = [thunk, sessionExpiration]

  // ======================================================
  // Store Enhancers
  // ======================================================
  // const enhancers = [persistState()]
  const enhancers = []

  let composeEnhancers = compose

  if (__DEV__) {
    const composeWithDevToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    if (typeof composeWithDevToolsExtension === 'function') {
      composeEnhancers = composeWithDevToolsExtension
    }
  }

  // ======================================================
  // Store Instantiation and HMR Setup
  // ======================================================
  const store = createStore(
    makeRootReducer(),
    initialState,
    composeEnhancers(
      applyMiddleware(...middleware),
      ...enhancers
    )
  )
  store.asyncReducers = {}

  // To unsubscribe, invoke `store.unsubscribeHistory()` anytime
  store.unsubscribeHistory = browserHistory.listen(updateLocation(store))

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const reducers = require('./reducers').default
      store.replaceReducer(reducers(store.asyncReducers))
    })
  }

  return store
}
