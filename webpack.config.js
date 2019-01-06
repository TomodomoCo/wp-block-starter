const _ = require('lodash')

const externals = [
  jquery: 'jQuery',
  lodash: 'lodash',
]

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
  };
});

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
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  externals,
  output: {
    filename: 'script.js',
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
