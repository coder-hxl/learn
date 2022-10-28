import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
// import axios from 'axios'

import { addNumber } from '../store/features/counter'
import {
  changeBanners,
  changeRecommends,
  fetchHomeMultidataAction
} from '../store/features/home'

export class Home extends PureComponent {
  componentDidMount() {
    //   axios.get('http://123.207.32.32:8000/home/multidata').then((res) => {
    //     const data = res.data.data
    //     const banners = data.banner.list
    //     const recommends = data.recommend.list
    //     this.props.changeBanners(banners)
    //     this.props.changeRecommends(recommends)
    //   })

    this.props.fetchHomeMultidata()
  }

  addNumber(num) {
    this.props.addNumber(num)
  }

  render() {
    const { counter, banners, recommends } = this.props

    return (
      <div>
        <h2>Home: {counter}</h2>
        <button onClick={() => this.addNumber(5)}>+5</button>
        <button onClick={() => this.addNumber(10)}>+10</button>
        <button onClick={() => this.addNumber(20)}>+20</button>

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
  addNumber: (num) => dispatch(addNumber(num)),
  changeBanners: (banners) => dispatch(changeBanners(banners)),
  changeRecommends: (recommends) => dispatch(changeRecommends(recommends)),
  fetchHomeMultidata: () => dispatch(fetchHomeMultidataAction('哈哈哈'))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
