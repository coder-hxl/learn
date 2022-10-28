import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { subNumber } from '../store/features/counter'

export class Profile extends PureComponent {
  subNumber(num) {
    this.props.subNumber(num)
  }

  render() {
    const { counter } = this.props

    return (
      <div>
        <h2>Profile: {counter}</h2>
        <button onClick={() => this.subNumber(5)}>-5</button>
        <button onClick={() => this.subNumber(10)}>-10</button>
        <button onClick={() => this.subNumber(20)}>-20</button>
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  counter: state.counter.counter
})

const maDispatchToProps = (dispatch) => ({
  subNumber: (num) => dispatch(subNumber(num))
})

export default connect(mapStateToProps, maDispatchToProps)(Profile)
