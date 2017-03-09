import axios from 'axios'
import { browserHistory } from 'react-router'

import strings from '../locale'

export function log (data) {
  let options = {
    url: '/api/appdata',
    method: 'post',
    data: data
  }

  axios(options)
  .catch((err) => {
    console.log('error saving log data')
    if (err.response.status == 403) {
      console.log('session expired, redirecting to root')
      browserHistory.push('/')
    }
  })
}

export function localizeStrings (state, props) {
  var lang = state.school.schoolConfiguration ? state.school.schoolConfiguration.locale : 'en'
  strings.setLanguage(lang)
  return strings
}
