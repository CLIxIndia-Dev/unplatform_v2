// School Configuration Container

import { connect } from 'react-redux'

import { setSchoolConfiguration } from '../reducers/SchoolConfiguration/setSchoolConfiguration'
import { getSchoolConfiguration } from '../reducers/SchoolConfiguration/getSchoolConfiguration'
import { updateSchoolConfiguration } from '../reducers/SchoolConfiguration/updateSchoolConfigurationForm'

const mapStateToProps = (state, ownProps) => {
  console.log(state)
  return {
    configuration: state.school ? state.school.schoolConfiguration : null,
    form: state.school ? state.school.form : null
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSetSchoolConfiguration: (data) => dispatch(setSchoolConfiguration(data)),
    onGetSchoolConfiguration: () => dispatch(getSchoolConfiguration()),
    onUpdateSchoolConfiguration: (data) => dispatch(updateSchoolConfiguration(data))
  }
}

const provider = (component) => {
  return connect(mapStateToProps, mapDispatchToProps)(component)
}

export default provider
