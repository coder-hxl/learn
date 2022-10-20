import React, { Component } from 'react'

import userContext from './context/user-context'
import themContext from './context/them-context'

export class HomeInfo extends Component {
  render() {
    // 第四步: 获取值
    const { color, fontSize } = this.context

    return (
      <div>
        <h2>
          HomeInfo: {color}-{fontSize}
        </h2>

        <userContext.Consumer>
          {(item) => (
            <h3>
              name: {item.nickname} age: {item.age}
            </h3>
          )}
        </userContext.Consumer>
      </div>
    )
  }
}

// 第三步: 设置contextType
HomeInfo.contextType = themContext

export default HomeInfo
