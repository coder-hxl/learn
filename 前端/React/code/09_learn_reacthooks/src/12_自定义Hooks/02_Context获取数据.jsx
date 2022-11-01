import React, { memo } from 'react'

import { UserContext, TokenContext } from './context'
import { useUserToken } from './hooks'

const Home = memo(() => {
  const { user, token } = useUserToken()

  return (
    <h2>
      Home - {user.name} - {user.age} -{token}
    </h2>
  )
})

const About = memo(() => {
  const { user, token } = useUserToken()

  return (
    <h2>
      About - {user.name} - {user.age} -{token}
    </h2>
  )
})

const App = memo(() => {
  return (
    <UserContext.Provider value={{ name: 'hxl', age: 18 }}>
      <TokenContext.Provider value="coderhxlcccccas">
        <div>
          <h2>App</h2>
          <Home />
          <About />
        </div>
      </TokenContext.Provider>
    </UserContext.Provider>
  )
})

export default App
