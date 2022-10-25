const CracoLessPlugin = require('craco-less')

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { primaryColor: '#1DA57A' },
            javascriptEnabled: true
          }
        }
      }
    }
  ]
}
