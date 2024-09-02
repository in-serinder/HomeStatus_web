
module.exports = {

    publicPath: './',  

    outputDir: 'dist',

    lintOnSave: true,

    chainWebpack: () => {},
    configureWebpack: () => {},

    productionSourceMap: true,

    css: {

     extract: true,

     sourceMap: false,

     loaderOptions: {},

     modules: false
    },

    parallel: require('os').cpus().length > 1,

    pwa: {},

    devServer: {
      open: process.platform === 'darwin',
      disableHostCheck: true,
      host: 'www.test.com',
      port: 1234,
      https: false,
      hotOnly: false,
     before: app => {}
    },

    pluginOptions: {

    }
   }
  