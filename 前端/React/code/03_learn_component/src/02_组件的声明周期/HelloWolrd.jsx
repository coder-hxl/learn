import React from 'react';

class HelloWorld extends React.Component {
  constructor() {
    console.log('constructor');

    super()

    this.state = {
      message: 'Hello Wolrd'
    }
  }

  changeText() {
    this.setState({ message: '你好 世界' })
  }

  render() {
    console.log('render');

    const {message} = this.state

    return (
      <div>
        <h1>{message}</h1>
        <button onClick={() => this.changeText()}>修改文本</button>
      </div>
    )
  }

  // ========== 常用的生命周期 ==========
  // 组件挂载到页面
  componentDidMount() {
    console.log('componentDidMount');
  }

  // 组件更新
  componentDidUpdate(preProps, preState, snapshot) {
    console.log('componentDidUpdate', snapshot);
  }

  // 组件卸载
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  // ========== 不常用的生命周期 ==========
  // 更新数据时是否进行渲染
  shouldComponentUpdate() {
    console.log('shouldComponentUpdate');
    return true
  }

  // 获取更新前的快照
  getSnapshotBeforeUpdate(preProps, preState) {
    console.log('getSnapshotBeforeUpdate', preProps, preState);

    return '哈哈哈'
  }
}

export default HelloWorld
