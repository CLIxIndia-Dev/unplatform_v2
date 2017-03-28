import { injectReducer } from '../../store/reducers'
import LessonsComponent from './Lessons'

export default (store) => ({
  path : 'subjects/:subjectName/grades/:gradeName/units/:unitName',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const LessonsFactory = require('../../containers/LessonsContainer').default

      /*  Return getComponent   */
      cb(null, LessonsFactory(LessonsComponent))

    /* Webpack named bundle   */
  }, 'lessons')
  }
})
