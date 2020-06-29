module.exports = {
  devServer: {
    port: 8003,
    disableHostCheck: true,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  configureWebpack: {
    output: {
      library: 'VueMicroAppThree',
      libraryTarget: 'umd',
      jsonpFunction: `webpackJsonp_VueMicroAppThree`
    }
  }
}