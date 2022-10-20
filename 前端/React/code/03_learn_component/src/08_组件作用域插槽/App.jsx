import React, { Component } from 'react'

import TabControl from './TabControl'

class App extends Component {
  constructor() {
    super()

    this.state = {
      tabs: ['主页', '分类', '个人'],
      tabIndex: 0
    }
  }

  tabClick(tabIndex) {
    this.setState({ tabIndex })
  }

  getTabItem(item) {
    if (item == '主页') {
      return <i>{item}</i>
    }

    return <button>{item}</button>
  }

  render() {
    const { tabs, tabIndex } = this.state

    return (
      <div>
        <TabControl
          tabs={tabs}
          tabClick={(i) => this.tabClick(i)}
          tabItem={(item) => this.getTabItem(item)}
        />
        <h2>{tabs[tabIndex]}</h2>
      </div>
    )
  }
}

export default App
