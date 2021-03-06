var resolve = require('path').resolve

module.exports = {
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      '~': __dirname,
      static: resolve(__dirname, 'static'), // use in template with <img src="~static/nuxt.png" />
      '~static': resolve(__dirname, 'static'),
      assets: resolve(__dirname, 'assets'), // use in template with <img src="~static/nuxt.png" />
      '~/assets': resolve(__dirname, 'assets'),
      '~plugins': resolve(__dirname, 'plugins'),
      '~store': resolve(__dirname, '.nuxt/store'),
      '~router': resolve(__dirname, '.nuxt/router'),
      '~pages': resolve(__dirname, 'pages'),
      '~/components': resolve(__dirname, 'components')
    }
  }
}
