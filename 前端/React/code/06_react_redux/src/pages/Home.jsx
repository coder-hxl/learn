import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import { addNumberAction, subNumberAction } from '../store/counter'

export class Home extends PureComponent {
  calcNumber(num, isAdd = true) {
    if (isAdd) {
      this.props.addNumber(num)
    } else {
      this.props.subNumber(num)
    }
  }

  render() {
    const { counter, banners, recommends } = this.props

    return (
      <div>
        <h2>Home: {counter}</h2>
        <button onClick={() => this.calcNumberr(1)}>+1</button>
        <button onClick={() => this.calcNumber(10)}>+10</button>
        <button onClick={() => this.calcNumber(1, false)}>-1</button>
        <button onClick={() => this.calcNumber(10, false)}>-10</button>

        <div>
          <h2>轮播图: </h2>
          <ul>
            {banners.map((item, index) => {
              return <li key={index}>{item.title}</li>
            })}
          </ul>
        </div>

        <div>
          <h2>推荐: </h2>
          <ul>
            {recommends.map((item, index) => {
              return <li key={index}>{item.title}</li>
            })}
          </ul>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  counter: state.counter.counter,
  banners: state.home.banners,
  recommends: state.home.recommends
})
const mapDispatchToProps = (dispatch) => ({
  addNumber: (num) => dispatch(addNumberAction(num)),
  subNumber: (num) => dispatch(subNumberAction(num))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
