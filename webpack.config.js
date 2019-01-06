/**
 * External dependencies
 */
const _ = require('lodash')

/**
 * Define externals
 */
const externals = {
  jquery: 'jQuery',
  lodash: 'lodash',
  react: 'React',
}

/**
 * WordPress dependences
 */
const wpDependencies = [
  'apiRequest',
  'blocks',
  'components',
  'data',
  'date',
  'editor',
  'editPost',
  'element',
  'hooks',
  'i18n',
  'plugins',
  'utils',
]

wpDependencies.forEach(wpDependency => {
  externals['@wordpress/' + wpDependency] = {
    this: ['wp', wpDependency]
  }
})

/**
 * Webpack configuration defaults
 */
const defaults = {
  watch: true,
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@wordpress/default',
            ],
            plugins: [
              ['@babel/transform-react-jsx', {'pragma': 'wp.element.createElement'}],
            ],
          },
        },
      },
    ],
  },
  resolve: {
    modules: [__dirname, "node_modules"]
  },
  externals,
  output: {
    filename: 'script.js',
    libraryTarget: 'this',
  },
}

/**
 * Build the whole config for each stage
 */
const config = {
  dev: _.defaults(
    {
      mode: 'development',
      watch: true,
      stats: {
        colors: true,
      },
      devtool: 'source-map',
    },
    defaults
  ),
  production: _.defaults(
    {
      mode: 'production',
      watch: false,
    },
    defaults
  ),
}

module.exports = config
