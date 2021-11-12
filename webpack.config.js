/*
 * @Description:
 * @Author: xiao.zhang
 * @Date: 2021-11-12 14:23:04
 * @LastEditors: xiao.zhang
 * @LastEditTime: 2021-11-12 15:06:30
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// 3，通过html-webpack-plugin自动注入编译打包好的脚本文件
const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: path.join(__dirname, './example/src/index.html'),
  filename: './index.html',
});

module.exports = {
  mode: 'production',
  // 1，使用./example/src/app.js做为项目入口，处理资源文件的依赖关系
  entry: path.join(__dirname, './example/src/app.js'),
  output: {
    path: path.join(__dirname, 'example/dist'),
    filename: 'bundle.js',
  },
  module: {
    // 2，通过babel-loader来编译处理js和jsx文件
    rules: [
      { test: /\.(js|jsx)$/, use: 'babel-loader', exclude: /node_modules/ },
    ],
  },

  plugins: [htmlWebpackPlugin],
  resolve: {
    extensions: ['.js', '.jsx'],
  },

  // 4，为demo启动端口为3001的服务
  devServer: {
    port: 3001,
  },
  performance: false,
};
