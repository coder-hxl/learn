import React, { memo } from 'react'

import { useLocalStorage } from './hooks'

const Home = memo(() => {
  const [name, setName] = useLocalStorage('name')

  return (
    <div>
      <h2>Home - {name}</h2>
      <button onClick={(e) => setName('coderhxl')}>修改名字</button>
    </div>
  )
})

const About = memo(() => {
  const [avatarUrl, setAvatarUrl] = useLocalStorage('avatar')

  return (
    <div>
      <h2>About - {avatarUrl}</h2>
      <button onClick={(e) => setAvatarUrl('afadaihbvhdsviabujvdopjbx')}>
        修改avatarUrl
      </button>
    </div>
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
