import React, { memo, useId, useState } from 'react'

const App = memo(() => {
  const id = useId()
  const [count, setCount] = useState(0)

  console.log(id)

  return (
    <div id={id}>
      <h2>App - {count}</h2>
      <button onClick={(e) => setCount(count + 1)}>+1</button>
    </div>
  )
})

export default App
