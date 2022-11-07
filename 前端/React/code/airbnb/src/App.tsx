import React, { memo } from 'react'
import { useRoutes } from 'react-router-dom'

import routes from './router'

const App = memo(() => {
  return (
    <div className="App">
      <div>Header</div>
      <div>{useRoutes(routes)}</div>
      <div>Footer</div>
    </div>
  )
})

export default App
