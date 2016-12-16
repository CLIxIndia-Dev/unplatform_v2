// Tool Container

import { connect } from 'react-redux'

import { getTools } from '../selectors'
import { localizeStrings } from '../utilities'

import { clearSurvey } from '../reducers/Survey/clearSurvey'

const mapStateToProps = (state, ownProps) => {
  return {
    locale: state.school.schoolConfiguration ? state.school.schoolConfiguration.locale : null,
    sessionId: state.survey.sessionId ? state.survey.sessionId : null,
    toolName: ownProps.params.toolName,
    strings: localizeStrings(state, ownProps),
    version: state.version.version ? state.version.version : null
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onFinish: () => dispatch(clearSurvey())
  }
}

const provider = (component) => {
  return connect(mapStateToProps, mapDispatchToProps)(component)
}

export default provider
