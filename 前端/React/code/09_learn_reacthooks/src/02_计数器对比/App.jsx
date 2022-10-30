import React, { memo } from 'react'
import CounterClass from './CounterClass'
import CounterHook from './CounterHook'

const App = memo(() => {
  return (
    <div>
      <CounterClass />
      <hr />
      <CounterHook />
    </div>
  )
})

export default App
