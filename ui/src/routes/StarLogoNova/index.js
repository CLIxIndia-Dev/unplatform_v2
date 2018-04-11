import StarLogoNovaComponent from './StarLogoNova'

export default (store) => ({
  path : 'sln-create-template',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const StarLogoNovaFactory = require('../../containers/StarLogoNovaContainer').default

      /*  Return getComponent   */
      cb(null, StarLogoNovaFactory(StarLogoNovaComponent))

    /* Webpack named bundle   */
    }, 'sln')
  }
})
