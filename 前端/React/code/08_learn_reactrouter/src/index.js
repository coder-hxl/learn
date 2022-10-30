import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'

import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  // <React.StrictMode>
  <React.Suspense fallback={<h3>Loading...</h3>}>
    <HashRouter>
      <App />
    </HashRouter>
  </React.Suspense>
  // </React.StrictMode>
)
