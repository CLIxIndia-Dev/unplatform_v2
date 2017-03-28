import { injectReducer } from '../../store/reducers'
import GradesComponent from './Grades'

export default (store) => ({
  path : 'subjects/:subjectName',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const GradesFactory = require('../../containers/GradesContainer').default

      /*  Return getComponent   */
      cb(null, GradesFactory(GradesComponent))

    /* Webpack named bundle   */
  }, 'grades')
  }
})
