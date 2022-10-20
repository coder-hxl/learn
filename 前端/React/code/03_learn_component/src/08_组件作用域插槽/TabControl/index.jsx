import React, { Component } from 'react'

import './style.css'

class TabControl extends Component {
  constructor() {
    super()

    this.state = {
      currentIndex: 0
    }
  }

  itemClick(index) {
    // 更新组件state
    this.setState({ currentIndex: index })

    // 通知父组件
    this.props.tabClick(index)
  }

  render() {
    const { tabs, tabItem } = this.props
    const { currentIndex } = this.state

    return (
      <div className="tab">
        {tabs.map((item, index) => {
          return (
            <div
              className={`item ${currentIndex == index ? 'activate' : ''}`}
              key={item}
              onClick={() => this.itemClick(index)}
            >
              {/* 通过调用将数据传出 */}
              {tabItem(item)}
            </div>
          )
        })}
      </div>
    )
  }
}

export default TabControl
