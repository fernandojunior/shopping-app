const {
  createConfig,

  // Feature blocks
  addPlugins,
  defineConstants,
  entryPoint,
  env,
  group,
  setOutput,
  sourceMaps,

  // Shorthand setters
  babel,
  extractText,
  uglify
} = require('webpack-blocks')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const developmentConfig = () => group([
  sourceMaps()
])

const productionConfig = () => group([
  extractText(),
  uglify(),
  addPlugins([
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    })
  ])
])

const file = () => (context, { merge }) => merge({
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg|woff2?|ttf|eot)$/,
        use: [
          { loader: 'file-loader', options: {} }
        ]
      }
    ]
  }
})

const css = () => (context, { merge }) => merge({
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
})

module.exports = createConfig([
  babel(),
  css(),
  file(),
  addPlugins([
    new HtmlWebpackPlugin({
      inject: true,
      template: './index.html'
    }),
    new CopyWebpackPlugin([{
      from: './public/**/*'
    }])
  ]),
  defineConstants({
    'process.env.NODE_ENV': process.env.NODE_ENV || 'development'
  }),
  env('development', [
    entryPoint('./src/index.dev.js'),
    developmentConfig()
  ]),
  env('production', [
    entryPoint('./src/index.js'),
    setOutput('./build/bundle.js'),
    productionConfig()
  ])
])
