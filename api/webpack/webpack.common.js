const path = require('path')
const serverlessWebpack = require('serverless-webpack')
const webpack = require('webpack')
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

module.exports = {
  stats: 'minimal',
  context: path.resolve(process.cwd()),
  entry: serverlessWebpack.lib.entries,
  resolve: {
    alias: {
      '@': path.resolve(process.cwd(), 'lambdas/')
    },
    extensions: ['.js', '.json', '.ts']
  },
  target: 'node',
  plugins: [
    new webpack.IgnorePlugin({
      resourceRegExp: /^\.\/locale$/,
      contextRegExp: /date-fns$/
    })
    // new BundleAnalyzerPlugin({
    //   analyzerMode: 'static',
    // }),
  ],
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true
        }
      }
    ]
  }
}
