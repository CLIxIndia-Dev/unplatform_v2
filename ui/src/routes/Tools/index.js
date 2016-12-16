import { injectReducer } from '../../store/reducers'
import ToolsComponent from './Tools'

export default (store) => ({
  path : 'tools',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const ToolsFactory = require('../../containers/ToolsContainer').default

      /*  Return getComponent   */
      cb(null, ToolsFactory(ToolsComponent))

    /* Webpack named bundle   */
  }, 'tools')
  }
})
