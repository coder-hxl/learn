import { PureComponent } from 'react'

function logRenderTime(OriginComponent) {
  return class extends PureComponent {
    componentWillMount() {
      this.beginTime = new Date().getTime()
    }

    componentDidMount() {
      const endTime = new Date().getTime()
      const interval = endTime - this.beginTime

      console.log(
        `当前 ${OriginComponent.name} 页面花费了 ${interval}ms 完成渲染~`
      )
    }

    render() {
      return <OriginComponent {...this.props} />
    }
  }
}

export default logRenderTime
