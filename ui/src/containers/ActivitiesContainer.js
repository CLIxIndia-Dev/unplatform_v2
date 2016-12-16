// Activities Container

import { connect } from 'react-redux'

import { localizeStrings } from '../utilities'
import { clearSurvey } from '../reducers/Survey/clearSurvey'

const mapStateToProps = (state, ownProps) => {
  return {
    locale: state.school.schoolConfiguration ? state.school.schoolConfiguration.locale : null,
    sessionId: state.survey.sessionId ? state.survey.sessionId : null,
    lessonName: ownProps.params.lessonName,
    unitName: ownProps.params.unitName,
    gradeName: ownProps.params.gradeName,
    subjectName: ownProps.params.subjectName,
    strings: localizeStrings(state, ownProps)
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
