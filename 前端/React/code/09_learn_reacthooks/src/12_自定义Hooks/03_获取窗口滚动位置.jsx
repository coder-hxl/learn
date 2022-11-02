import React, { memo } from 'react'

import { useScrollPosition } from './hooks'

import './style.css'

const Home = memo(() => {
  const { scrollX, scrollY } = useScrollPosition()

  return (
    <h2>
      Home ( X: {scrollX} - Y: {scrollY} )
    </h2>
  )
})

const About = memo(() => {
  const { scrollX, scrollY } = useScrollPosition()

  return (
    <h2>
      About ( X: {scrollX} - Y: {scrollY} )
    </h2>
  )
})

const App = memo(() => {
  return (
    <div className="App">
      <h2>App</h2>
      <Home />
      <About />
    </div>
  )
})

export default App
