import React, { Component, PropTypes } from 'react'
import { browserHistory, Router } from 'react-router'
import { Provider } from 'react-redux'

import {getSchoolConfiguration} from '../reducers/SchoolConfiguration/getSchoolConfiguration'
import {getSession} from '../reducers/Survey/getSession'
import {getModules} from '../reducers/Module/getModules'
import {getVersion} from '../reducers/Version/getVersion'

class AppContainer extends Component {
  // TODO: Check if school configuration is in local storage
  // otherwise, fetch it
  static propTypes = {
    routes : PropTypes.object.isRequired,
    store  : PropTypes.object.isRequired
  }

  componentDidMount() {
    const store = this.props.store;
    const state = store.getState();      // because AppContainer is the top-level parent

    if (!state.survey.sessionId) {
      store.dispatch(getSession())
    }

    if (!state.version.version) {
      store.dispatch(getVersion())
    }

    if (!state.school.schoolConfiguration) {
      store.dispatch(getSchoolConfiguration())
    }

    if (!state.module.modules) {
      store.dispatch(getModules())
    }
  }

  shouldComponentUpdate () {
    return false
  }

  render () {
    const { routes, store } = this.props

    return (
      <Provider store={store}>
        <div style={{ height: '100vh' }}>
          <Router history={browserHistory} children={routes} />
        </div>
      </Provider>
    )
  }
}

export default AppContainer
