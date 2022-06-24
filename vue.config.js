const baseURL = process.env.VUE_APP_URL
const path = require('path')

// 导入全局scss
function addStyleResource(rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/static/styles/global-color.scss')
      ]
    })
}

module.exports = {
  publicPath: './',
  outputDir: process.env.VUE_APP_BASE_OUTPUTDIR,
  assetsDir: 'assets',
  lintOnSave: true,
  productionSourceMap: false,
  chainWebpack: config => {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => addStyleResource(config.module.rule('scss').oneOf(type)))
  },
  configureWebpack: {
    devServer: {
      open: false,
      host: 'localhost',
      port: '8600',
      hot: true,
      proxy: {
        '/api': {
          target: baseURL,
          secure: false,
          changeOrigin: true, // 开启代理
          pathRewrite: {
            '^/api': '/'
          }
        }
      }
    }
  }
}
