import React, { memo } from 'react'

import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import {
  addNumberAction,
  changeMessageAction,
  subNumberAction
} from './store/modules/counter'

const Home = memo(() => {
  console.log('Home组件被渲染~')

  // 当state发生改变时, 第二个参数决定要不要重新渲染组件
  const { message } = useSelector(
    (state) => ({
      message: state.counter.message
    }),
    shallowEqual
  )

  const dispatch = useDispatch()

  function changeMessage() {
    dispatch(changeMessageAction('你好, 世界'))
  }

  return (
    <div>
      <h2>Home - {message}</h2>
      <button onClick={changeMessage}>修改文本</button>
    </div>
  )
})

const App = memo(() => {
  console.log('App组件被渲染~')

  const { count } = useSelector(
    (state) => ({
      count: state.counter.count
    }),
    shallowEqual
  )

  const dispatch = useDispatch()

  function calcCountHandle(num, isAdd = true) {
    if (isAdd) {
      dispatch(addNumberAction(num))
    } else {
      dispatch(subNumberAction(num))
    }
  }

  return (
    <div>
      <h2>App - {count}</h2>
      <button onClick={(e) => calcCountHandle(5)}>+5</button>
      <button onClick={(e) => calcCountHandle(5, false)}>-5</button>
      <Home />
    </div>
  )
})

export default App
