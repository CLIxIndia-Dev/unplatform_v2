// Home view container
import { connect } from 'react-redux'

import { getSchoolConfiguration } from '../reducers/SchoolConfiguration/getSchoolConfiguration'
import { localizeStrings } from '../utilities'
import { flushModules } from '../reducers/Module/flushModules'
import { getModules } from '../reducers/Module/getModules'
import { updateSurvey } from '../reducers/Survey/updateSurvey'
import { setSurvey } from '../reducers/Survey/setSurvey'
import { clearSurvey } from '../reducers/Survey/clearSurvey'

const mapStateToProps = (state, ownProps) => {
  console.log('home view state', state)
  return {
    strings: localizeStrings(state, ownProps),
    locale: state.school && state.school.schoolConfiguration ? state.school.schoolConfiguration.locale : null,
    modules: state.module.modules ? state.module.modules : null,
    survey: state.survey.data ? state.survey.data : null
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onGetModules: () => dispatch(getModules()),
    onGetConfiguration: () => dispatch(getSchoolConfiguration()),
    onFlush: () => {
      dispatch(clearSurvey())
      dispatch(flushModules())
    },
    onUpdateSurvey: (data) => dispatch(updateSurvey(data)),
    onSetSurvey: (data) => dispatch(setSurvey(data))
  }
}

const provider = (component) => {
  return connect(mapStateToProps, mapDispatchToProps)(component)
}

export default provider
