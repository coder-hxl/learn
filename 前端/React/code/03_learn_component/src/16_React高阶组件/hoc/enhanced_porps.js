import { PureComponent } from 'react'

function enhancedUserInfo(OriginComponent) {
  // 给 OriginComponent 组件注入其他 prop
  return class extends PureComponent {
    constructor() {
      super()

      this.state = {
        userInfo: {
          name: 'hxl',
          age: 18
        }
      }
    }

    render() {
      const { userInfo } = this.state

      return <OriginComponent {...userInfo} {...this.props} />
    }
  }
}

export default enhancedUserInfo
