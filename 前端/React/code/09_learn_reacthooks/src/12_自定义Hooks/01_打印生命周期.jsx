import React, { memo, useEffect, useState } from 'react'

function useLogLife(CName) {
  useEffect(() => {
    console.log(`${CName} Component Mount`)

    return () => {
      console.log(`${CName} Component Unmount`)
    }
  }, [CName])
}

const Home = memo(() => {
  useLogLife('Home')

  return (
    <div>
      <h2>Home</h2>
    </div>
  )
})

const About = memo(() => {
  useLogLife('About')

  return (
    <div>
      <h2>About</h2>
    </div>
  )
})

const App = memo(() => {
  const [isShow, setIsShow] = useState(true)

  useLogLife('App')

  return (
    <div>
      <h2>App</h2>
      <button onClick={(e) => setIsShow(!isShow)}>切换</button>
      {isShow && <Home />}
      {isShow && <About />}
    </div>
  )
})

export default App
