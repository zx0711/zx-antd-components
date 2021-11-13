/*
 * @Description:
 * @Author: xiao.zhang
 * @Date: 2021-11-12 14:23:04
 * @LastEditors: xiao.zhang
 * @LastEditTime: 2021-11-13 19:04:03
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const firstPlugin = require('./analyer-bundle-size');

// 3，通过html-webpack-plugin自动注入编译打包好的脚本文件
const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: path.join(__dirname, './example/src/index.html'),
  filename: './index.html',
});

module.exports = {
  mode: 'development',
  // 1，使用./example/src/app.js做为项目入口，处理资源文件的依赖关系
  entry: path.join(__dirname, './example/src/app.js'),
  output: {
    filename: '[name].[hash:8].js',
    path: path.join(__dirname, 'example/dist'),
  },
  module: {
    // 2，通过babel-loader来编译处理js和jsx文件
    rules: [
      { test: /\.(js|jsx)$/, use: 'babel-loader', exclude: /node_modules/ },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'], // 从右到左解析
      },
      {
        test: /\.less$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader'], // 从右到左解析
      },
    ],
  },

  plugins: [
    htmlWebpackPlugin,
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
      chunkFilename: '[id].css',
    }),
    new firstPlugin(),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },

  // 4，为demo启动端口为3001的服务
  devServer: {
    port: 3002,
  },
  performance: false,
};
