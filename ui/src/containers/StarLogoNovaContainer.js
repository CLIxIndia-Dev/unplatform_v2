// Star Logo Nova Container

import { connect } from 'react-redux'

import { createLockedModel } from '../reducers/StarLogoNova/createLockedModel'
import { updateModelForm } from '../reducers/StarLogoNova/updateModelForm'

const mapStateToProps = (state, ownProps) => {
  return {
    form: state.sln.form,
    saving: state.sln.saving
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onCreateLockedModel: (data) => dispatch(createLockedModel(data)),
    onUpdateModelForm: (data) => dispatch(updateModelForm(data))
  }
}

const provider = (component) => {
  return connect(mapStateToProps, mapDispatchToProps)(component)
}

export default provider
