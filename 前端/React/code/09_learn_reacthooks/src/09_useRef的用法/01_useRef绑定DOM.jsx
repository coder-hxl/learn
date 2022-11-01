import React, { memo, useRef } from 'react'

const App = memo(() => {
  const titleRef = useRef()
  const inputRef = useRef()

  function handleDOM() {
    console.log(titleRef.current)
    inputRef.current.focus()
  }

  return (
    <div>
      <h2 ref={titleRef}>App</h2>
      <input type="text" ref={inputRef} />
      <button onClick={handleDOM}>操作DOM</button>
    </div>
  )
})

export default App
