import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { addNumberAction, subNumberAction } from '../store/actionCreators'

export class Home extends PureComponent {
  calcNumber(num, isAdd = true) {
    if (isAdd) {
      this.props.addNumber(num)
    } else {
      this.props.subNumber(num)
    }
  }

  render() {
    const { counter } = this.props

    return (
      <div>
        <h2>Home: {counter}</h2>
        <button onClick={() => this.calcNumberr(1)}>+1</button>
        <button onClick={() => this.calcNumber(10)}>+10</button>
        <button onClick={() => this.calcNumber(1, false)}>-1</button>
        <button onClick={() => this.calcNumber(10, false)}>-10</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({ counter: state.counter })
const mapDispatchToProps = (dispatch) => ({
  addNumber: (num) => dispatch(addNumberAction(num)),
  subNumber: (num) => dispatch(subNumberAction(num))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
