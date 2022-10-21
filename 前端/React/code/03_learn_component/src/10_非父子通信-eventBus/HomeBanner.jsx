import React, { Component } from 'react'

import eventBus from './utils/event'

export class HomeBanner extends Component {
  prevClick() {
    eventBus.emit('prevBanner', 'hxl', 18)
  }

  nextClick() {
    eventBus.emit('nextBanner', { name: 'why', age: 18 })
  }

  render() {
    return (
      <div>
        <h2>HomeBanner</h2>
        <button onClick={this.prevClick}>上一个</button>
        <button onClick={this.nextClick}>下一个</button>
      </div>
    )
  }
}

export default HomeBanner
