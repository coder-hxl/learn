import React, { PureComponent } from 'react'

import { RedTextWrapper, BorderWrapper } from './style'

export class Home extends PureComponent {
  render() {
    return (
      <div>
        <h2>Home</h2>
        <RedTextWrapper>嘿嘿嘿</RedTextWrapper>
        <BorderWrapper>哈哈哈</BorderWrapper>
      </div>
    )
  }
}

export default Home
