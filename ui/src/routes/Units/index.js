import { injectReducer } from '../../store/reducers'
import UnitsComponent from './Units'

export default (store) => ({
  path : 'subjects/:subjectName/grades/:gradeName',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const UnitsFactory = require('../../containers/UnitsContainer').default

      /*  Return getComponent   */
      cb(null, UnitsFactory(UnitsComponent))

    /* Webpack named bundle   */
  }, 'units')
  }
})
