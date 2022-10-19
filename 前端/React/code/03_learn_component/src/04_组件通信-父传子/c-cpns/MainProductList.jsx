import React, { Component } from 'react'
import propTypes from 'prop-types'

export class MainProductList extends Component {
  // props默认值
  static defaultProps = {
    productList: [],
    title: '默认标题'
  }

  render() {
    const {title, productList} = this.props

    return (
      <div>
        <h2>{title}</h2>
        <div>
          {productList.map(item => {
            return <h3 key={item.title}>{item.title}</h3>
          })}
        </div>
      </div>
    )
  }
}

// props类型检查
MainProductList.propTypes = {
  productList: propTypes.array.isRequired,
  title: propTypes.string
}

// props默认值
// MainProductList.defaultProps = {
//   productList: [],
//   title: '默认标题'
// }

export default MainProductList
