import React, { memo, useContext, useState } from 'react'

import { UserContext, ThemeContext } from './context'

const Home = memo(() => {
  const userInfo = useContext(UserContext)
  const theme = useContext(ThemeContext)

  return (
    <div>
      <h2>
        userInfo: {userInfo.name} - {userInfo.age}
      </h2>
      <h2 style={theme}>Hello World</h2>
    </div>
  )
})

const App = memo(() => {
  const [fontSize, setFontSize] = useState(30)

  return (
    <div>
      <UserContext.Provider value={{ name: 'hxl', age: 18 }}>
        <ThemeContext.Provider value={{ color: 'red', fontSize }}>
          <Home />
        </ThemeContext.Provider>
      </UserContext.Provider>

      <button onClick={(e) => setFontSize(fontSize + 2)}>主题字体变大</button>
    </div>
  )
})

export default App
