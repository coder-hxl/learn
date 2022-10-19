import React, { Component } from 'react'

class SubCounter extends Component {
  subClick(num) {
    this.props.subClick(num)
  }

  render() {
    return (
      <div>
        <button onClick={() => this.subClick(-1)}>-1</button>
        <button onClick={() => this.subClick(-5)}>-5</button>
        <button onClick={() => this.subClick(-10)}>-10</button>
      </div>
    )
  }
}

export default SubCounter
