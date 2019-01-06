const _ = require('lodash')

const externals = {
  jquery: 'jQuery',
  lodash: 'lodash',
  react: 'React',
}

// WordPress dependences
const wpDependencies = [
  'components',
  'element',
  'blocks',
  'hooks',
  'editor',
  'utils',
  'date',
  'data',
  'i18n',
  'editPost',
  'plugins',
  'apiRequest'
]

wpDependencies.forEach(wpDependency => {
  externals['@wordpress/' + wpDependency] = {
    this: ['wp', wpDependency]
  }
})

// Set the defaults
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

// Build the whole config
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
