import axios from 'axios'
import { browserHistory } from 'react-router'

import { LOCATION_CHANGE } from '../store/location'
import { RECEIVE_MODULES } from '../reducers/Module/getModules'
import { RECEIVE_SCHOOL_CONFIGURATION } from '../reducers/SchoolConfiguration/getSchoolConfiguration'
import { RECEIVE_GET_VERSION } from '../reducers/Version/getVersion'
import { RECEIVE_SET_SURVEY } from '../reducers/Survey/setSurvey'


function closeSessionWarningModal () {
  const sessionModal = document.getElementById('sessionWarning');
  if (sessionModal) {
    sessionModal.close();
  }
}

function bindContentPlayerMessageHandler () {
  window.removeEventListener('message', contentPlayerMessageHandler);
  window.addEventListener('message', contentPlayerMessageHandler, false);
}

function contentPlayerMessageHandler (e) {
  if (e.origin === 'https://localhost:8888' && e.data === 'startSessionCounter') {
    startSessionCounter();
  }
}

function bindKeepSessionActiveButton () {
  const keepSession = document.getElementById('yes');

  if (keepSession) {
    keepSession.removeEventListener('click', keepSessionActiveButton);
    keepSession.addEventListener('click', keepSessionActiveButton);
  }
}

function bindEndSessionButton () {
  const endSession = document.getElementById('no');

  if (endSession) {
    endSession.removeEventListener('click', endSessionButton);
    endSession.addEventListener('click', endSessionButton);
  }
}

function keepSessionActiveButton () {
  // close the modal and ping the server to reset session expiration count
  closeSessionWarningModal();
  let options = {
    url: '/api/v1/configuration'
  }

  axios(options)
  .then(() => {
    startSessionCounter();
  })
  .catch((err) => {
    console.log('error trying to refresh session')
    if (err.response.status === 403) {
      console.log('session expired, redirecting to root')
      browserHistory.push('/')
    }
  })

}

function endSessionButton () {
  // close the modal and redirect to the login page
  closeSessionWarningModal();
  browserHistory.push('/');
}

function startSessionCounter() {
  const sessionModal = document.getElementById('sessionWarning');

  if (window.SESSION_TIMER_ID) {
    clearTimeout(window.SESSION_TIMER_ID);
  }

  window.SESSION_TIMER_ID = setTimeout(function () {
    if (sessionModal) {
      sessionModal.showModal();
    }
  }, 10 * 60 * 1000);  // 10 minutes

  bindKeepSessionActiveButton();
  bindEndSessionButton();

  bindContentPlayerMessageHandler();
}

// Middleware to catch "Session expired" messages and
//   reroute to the root URL if the session is expired.
// Otherwise this middleware also starts the UI-side counter
//   that will bring up a modal when the session is half-expired.
const SessionExpiration = store => next => action => {
  const actionsToCheckForSessionExpiration = [RECEIVE_MODULES,
    RECEIVE_SCHOOL_CONFIGURATION,
    RECEIVE_GET_VERSION];
  const actionsThatTriggerSessionCounter = [RECEIVE_SET_SURVEY,
    LOCATION_CHANGE];

  let result = next(action)
  let returnedData
  if (result.version) {
    returnedData = result.version
  } else if (result.configuration) {
    returnedData = result.configuration
  } else if (result.modules) {
    returnedData = result.modules
  }

  if (actionsThatTriggerSessionCounter.indexOf(result.type) >= 0) {
    startSessionCounter();
  }

  if (actionsToCheckForSessionExpiration.indexOf(result.type) >= 0 &&
      !returnedData) {
    browserHistory.push('/')
    return ''
  }
  return result
}

export { SessionExpiration as default };