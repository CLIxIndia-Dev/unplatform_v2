import { injectReducer } from '../../store/reducers'
import SchoolConfigurationComponent from './SchoolConfiguration'

export default (store) => ({
  path : 'school',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const SchoolConfigurationFactory = require('../../containers/SchoolConfigurationContainer').default

      /*  Return getComponent   */
      cb(null, SchoolConfigurationFactory(SchoolConfigurationComponent))

    /* Webpack named bundle   */
  }, 'school')
  }
})
