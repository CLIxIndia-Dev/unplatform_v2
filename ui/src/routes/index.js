// We only need to import the modules necessary for initial render
import CoreLayout from '../layouts/CoreLayout/CoreLayout'
import Home from './Home'

import SchoolConfigurationRoute from './SchoolConfiguration'
import SubjectsRoute from './Subjects'
import ToolsRoute from './Tools'
import ToolRoute from './Tool'
import SubtoolRoute from './Subtool'
import UnitsRoute from './Units'
import LessonsRoute from './Lessons'
import ActivitiesRoute from './Activities'
import StarLogoNovaRoute from './StarLogoNova'
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
    ToolRoute(store),
    SubtoolRoute(store),
    UnitsRoute(store),
    LessonsRoute(store),
    ActivitiesRoute(store),
    StarLogoNovaRoute(store)
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
