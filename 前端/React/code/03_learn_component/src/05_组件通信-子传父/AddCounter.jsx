import React, { Component } from 'react'

class AddCounter extends Component {
  addClick(num) {
    this.props.addClick(num)
  }

  render() {
    return (
      <div>
        <button onClick={() => this.addClick(1)}>+1</button>
        <button onClick={() => this.addClick(5)}>+5</button>
        <button onClick={() => this.addClick(10)}>+10</button>
      </div>
    )
  }
}

export default AddCounter
