/*
 * @Description:
 * @Author: xiao.zhang
 * @Date: 2021-11-12 14:25:38
 * @LastEditors: xiao.zhang
 * @LastEditTime: 2021-11-13 18:08:41
 */
import React from 'react';
// const
import ReactDOM from 'react-dom';
import { ReactDemo } from '../../src';
import './app.css';
import './app.less';

class Index extends React.Component {
  componentDidMount() {
    const promise = new Promise(function (resolve, reject) {
      resolve(1);
    });
    console.log('promisepromise', promise);
  }
  render() {
    return (
      <div className='wrap'>
        <div className='title'>
          引入了less和css文件，webpack解析less和css文件
        </div>
        <ReactDemo />
      </div>
    );
  }
}
const App = () => <Index></Index>;
ReactDOM.render(<App />, document.getElementById('root'));
