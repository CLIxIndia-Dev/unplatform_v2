import { injectReducer } from '../../store/reducers'
import ActivitiesComponent from './Activities'

export default (store) => ({
  path : 'subjects/:subjectName/grades/:gradeName/units/:unitName/lessons/:lessonName',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const ActivitiesFactory = require('../../containers/ActivitiesContainer').default

      /*  Return getComponent   */
      cb(null, ActivitiesFactory(ActivitiesComponent))

    /* Webpack named bundle   */
  }, 'activities')
  }
})
