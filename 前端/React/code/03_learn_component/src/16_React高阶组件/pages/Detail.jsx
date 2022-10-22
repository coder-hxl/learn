import React, { PureComponent } from 'react'
import logRenderTime from '../hoc/log_render_time'

export class Detail extends PureComponent {
  render() {
    return <div>Detail</div>
  }
}

export default logRenderTime(Detail)
