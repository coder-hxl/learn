import React, { Component } from 'react'
import axios from 'axios'

import MainBanner from './MainBanner'
import MainProductList from './MainProductList'

 class Main extends Component {
  constructor() {
    super()

    this.state = {
      banner: [],
      productList: []
    }
  }

  componentDidMount() {
    axios.get('http://123.207.32.32:8000/home/multidata').then(res => {
      const {banner, recommend} = res.data.data

      this.setState({
        banner: banner.list,
        productList: recommend.list
      })
    })
  }

  render() {
    const {banner, productList} = this.state

    return (
      <div>
        Main
        <MainBanner banner={banner} />
        <MainProductList productList={productList} title="商品列表" />
        <MainProductList />
      </div>
    )
  }
}

export default Main
