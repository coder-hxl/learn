import React from 'react';

import HelloWorld from './HelloWolrd';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      showHW: true
    }
  }

  switchHW() {
    this.setState({showHW: !this.state.showHW})
  }

  render() {
    const {showHW} = this.state

    return (
      <div>
        <h2>哈哈哈</h2>
        <button onClick={() => this.switchHW()}>切换</button>
        {showHW && <HelloWorld />}
      </div>
    )
  }
}

export default App
