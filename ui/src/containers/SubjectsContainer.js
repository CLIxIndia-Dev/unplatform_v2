// Subjects Container
import { connect } from 'react-redux'

import {getSubjects} from '../selectors'
import { localizeStrings } from '../utilities'

const mapStateToProps = (state, ownProps) => {
  // console.log('state', state)
  return {
    locale: state.school.schoolConfiguration ? state.school.schoolConfiguration.locale : null,
    sessionId: state.survey.sessionId ? state.survey.sessionId : null,
    subjects: getSubjects(state, ownProps),
    strings: localizeStrings(state, ownProps),
    isSetSurveyInProgress: state.survey.setSurveyInProgress ? state.survey.setSurveyInProgress : false
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
