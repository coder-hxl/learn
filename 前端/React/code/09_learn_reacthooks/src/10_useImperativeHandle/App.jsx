import React, { memo, forwardRef, useRef, useImperativeHandle } from 'react'

const Home = memo(
  forwardRef((props, ref) => {
    const inputRef = useRef()

    useImperativeHandle(ref, () => {
      return {
        focus() {
          inputRef.current.focus()
        },
        setValue(value) {
          inputRef.current.value = value
        }
      }
    })

    return (
      <div>
        <h2>Home</h2>
        <input type="text" ref={inputRef} defaultValue="你好" />
      </div>
    )
  })
)

const App = memo(() => {
  const inputRef = useRef()

  function handelDOM() {
    console.log(inputRef.current)
    inputRef.current.focus()
    // inputRef.current.value = '哈哈哈哈'
    inputRef.current.setValue('哈哈哈哈')
  }

  return (
    <div>
      <h2>App</h2>
      <Home ref={inputRef} />
      <button onClick={handelDOM}>操作DOM</button>
    </div>
  )
})

export default App
