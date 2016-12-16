// We only need to import the modules necessary for initial render
import CoreLayout from '../layouts/CoreLayout/CoreLayout'
import Home from './Home'

import SchoolConfigurationRoute from './SchoolConfiguration'
import SubjectsRoute from './Subjects'
import ToolsRoute from './Tools'
import Tool from './Tool'
import Grades from './Grades'
import Units from './Units'
import Lessons from './Lessons'
import Activities from './Activities'
/*  Note: Instead of using JSX, we recommend using react-router
    PlainRoute objects to build route definitions.   */

export const createRoutes = (store) => ({
  path        : '/',
  component   : CoreLayout,
  indexRoute  : Home,
  childRoutes : [
    SchoolConfigurationRoute(store),
    SubjectsRoute(store),
    ToolsRoute(store),
    {
      path: '/tools/:toolName',
      component: Tool,
    },
    {
      path: '/subjects/:subjectName',
      component: Grades,
    },
    {
      path: '/subjects/:subjectName/grades/:gradeName',
      component: Units,
    },
    {
      path: '/subjects/:subjectName/grades/:gradeName/units/:unitName',
      component: Lessons,
    },
    {
      path: '/subjects/:subjectName/grades/:gradeName/units/:unitName/lessons/:lessonName',
      component: Activities,
    }
  ]
})

/*  Note: childRoutes can be chunked or otherwise loaded programmatically
    using getChildRoutes with the following signature:

    getChildRoutes (location, cb) {
      require.ensure([], (require) => {
        cb(null, [
          // Remove imports!
          require('./Counter').default(store)
        ])
      })
    }

    However, this is not necessary for code-splitting! It simply provides
    an API for async route definitions. Your code splitting should occur
    inside the route `getComponent` function, since it is only invoked
    when the route exists and matches.
*/

export default createRoutes
