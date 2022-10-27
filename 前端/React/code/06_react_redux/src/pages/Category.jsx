import React, { PureComponent } from 'react'

import { connect } from 'react-redux'
import { fetchHomeMultidataAction } from '../store/home'

export class Category extends PureComponent {
  componentDidMount() {
    this.props.fetchHomeMultidata()
  }

  render() {
    const { counter } = this.props

    return (
      <div>
        <h2>Category: {counter}</h2>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({ counter: state.counter.counter })

function mapDispatchToProps(dispatch) {
  return {
    fetchHomeMultidata: () => dispatch(fetchHomeMultidataAction())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Category)
