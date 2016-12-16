// Lessons Container

import { connect } from 'react-redux'

import { getLessons } from '../selectors'
import { localizeStrings } from '../utilities'

const mapStateToProps = (state, ownProps) => {
  return {
    locale: state.school.schoolConfiguration ? state.school.schoolConfiguration.locale : null,
    sessionId: state.survey.sessionId ? state.survey.sessionId : null,
    lessons: getLessons(state, ownProps),
    unitName: ownProps.params.unitName,
    gradeName: ownProps.params.gradeName,
    subjectName: ownProps.params.subjectName,
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
