import React, { PureComponent } from 'react'

import HomeStyle from './Home.module.css'

export class Home extends PureComponent {
  render() {
    return (
      <div>
        <h2 className={HomeStyle.title}>Home</h2>
        <div className={HomeStyle.context}>Home 哈哈哈</div>
      </div>
    )
  }
}

export default Home
