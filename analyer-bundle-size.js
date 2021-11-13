/*
 * @Description:
 * @Author: xiao.zhang
 * @Date: 2021-11-13 19:01:15
 * @LastEditors: xiao.zhang
 * @LastEditTime: 2021-11-13 19:05:05
 */
class firstPlugin {
  constructor(options) {
    this.options = options;
  }
  apply(compiler) {
    console.log('compilercompiler', compiler);
    compiler.plugin('emit', (compilation, callback) => {
      let str = '';
      for (let filename in compilation.assets) {
        str += `文件:${filename}  大小${compilation.assets[filename][
          'size'
        ]()}\n`;
      }
      // 通过compilation.assets可以获取打包后静态资源信息，同样也可以写入资源
      compilation.assets['fileSize.md'] = {
        source: function () {
          return str;
        },
        size: function () {
          return str.length;
        },
      };
      callback();
    });
  }
}
module.exports = firstPlugin;
