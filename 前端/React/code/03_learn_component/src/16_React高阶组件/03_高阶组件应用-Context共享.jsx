import React, { PureComponent } from 'react'
import ThemeContext from './context/theme-context'
import Product from './pages/Product'

export class App extends PureComponent {
  render() {
    return (
      <div>
        <h2>App</h2>
        <ThemeContext.Provider value={{ color: 'red', fontSize: 20 }}>
          <Product />
        </ThemeContext.Provider>
      </div>
    )
  }
}

export default App
