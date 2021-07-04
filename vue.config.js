/* eslint-disable */
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin')
const CircularDependencyPlugin = require('circular-dependency-plugin') // Detect modules with circular dependencies when bundling with webpack.

module.exports = {
  chainWebpack(config) {
    config.plugin('monaco').use(new MonacoWebpackPlugin())
    config.plugin('circular').use(new CircularDependencyPlugin())
  },
}
