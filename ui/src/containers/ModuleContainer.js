// Module "splash" container located within each route
import { connect } from 'react-redux'

import { getModules } from '../reducers/Module/getModules'

const mapStateToProps = (state, ownProps) => {
  // console.log('state', state)
  return {
    modules: state.module.modules ? state.module.modules : null
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onInitialize: () => {
      dispatch(getModules())
    }
  }
}

const provider = (component) => {
  return connect(mapStateToProps, mapDispatchToProps)(component)
}

export default provider
