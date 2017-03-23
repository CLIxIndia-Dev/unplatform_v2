import { injectReducer } from '../../store/reducers'
import ToolComponent from './Tool'

export default (store) => ({
  path : 'tools/:toolName',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const ToolFactory = require('../../containers/ToolContainer').default

      /*  Return getComponent   */
      cb(null, ToolFactory(ToolComponent))

    /* Webpack named bundle   */
  }, 'tool')
  }
})
