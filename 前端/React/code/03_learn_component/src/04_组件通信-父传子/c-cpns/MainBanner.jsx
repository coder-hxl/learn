import React, { Component } from 'react'

export class MainBanner extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {banner} = this.props

    return (
      <div>
        <h2>MainBanner</h2>
        <div>
        {banner.map(item => {
          return <h3 key={item.title}>{item.title}</h3>
        })}
        </div>
      </div>
    )
  }
}

export default MainBanner
