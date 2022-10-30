import React, { PureComponent } from 'react'
import { withRouter } from '../hoc'

export class Detail extends PureComponent {
  render() {
    const { params } = this.props.router

    return (
      <div>
        <h2>Detail</h2>
        <h3>id: {params.id}</h3>
      </div>
    )
  }
}

export default withRouter(Detail)
