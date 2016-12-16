// Tools Container

import { connect } from 'react-redux'

import { getTools } from '../selectors'
import { localizeStrings } from '../utilities'

const mapStateToProps = (state, ownProps) => {
  return {
    locale: state.school.schoolConfiguration ? state.school.schoolConfiguration.locale : null,
    sessionId: state.survey.sessionId ? state.survey.sessionId : null,
    tools: getTools(state, ownProps),
    strings: localizeStrings(state, ownProps)
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  }
}

const provider = (component) => {
  return connect(mapStateToProps, mapDispatchToProps)(component)
}

export default provider
