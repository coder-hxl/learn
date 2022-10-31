import React, { memo, useReducer } from 'react'

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + 1 }

    case 'decrement':
      return { ...state, count: state.count - 1 }

    case 'add_num':
      return { ...state, count: state.count + action.num }

    case 'sub_num':
      return { ...state, count: state.count - action.num }

    default:
      return state
  }
}

const App = memo(() => {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    name: 'hxl',
    age: 18
  })

  // const [count, setCount] = useState(0)
  // const [name, setName] = useState('hxl')
  // const [age, setAge] = useState(18)

  return (
    <div>
      <h2>{state.count}</h2>

      <button onClick={(e) => dispatch({ type: 'increment' })}>+1</button>
      <button onClick={(e) => dispatch({ type: 'decrement' })}>-1</button>
      <button onClick={(e) => dispatch({ type: 'add_num', num: 5 })}>+5</button>
      <button onClick={(e) => dispatch({ type: 'sub_num', num: 5 })}>-5</button>
      <button onClick={(e) => dispatch({ type: 'add_num', num: 10 })}>
        +10
      </button>
    </div>
  )
})

export default App
