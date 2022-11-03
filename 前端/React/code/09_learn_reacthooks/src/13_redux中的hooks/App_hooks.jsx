import React, { memo } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { addNumberAction, subNumberAction } from './store/modules/counter'

const App = memo((props) => {
  // 1.映射state到组件内
  const { count } = useSelector((state) => ({
    count: state.counter.count
  }))

  // 2.拿到dispatch, 派发action
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
      <h2>App {count}</h2>
      <button onClick={(e) => calcCountHandle(1)}>+1</button>
      <button onClick={(e) => calcCountHandle(5)}>+5</button>
      <button onClick={(e) => calcCountHandle(1, false)}>-1</button>
      <button onClick={(e) => calcCountHandle(5, false)}>-5</button>
    </div>
  )
})

export default App
