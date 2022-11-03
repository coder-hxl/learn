import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

import store from './13_redux中的hooks/store'

// import App from './01_不使用Hook/App'
// import App from './02_计数器对比/App'
// import App from './03_useState的用法/App'
// import App from './04_useEffect的用法/05_执行时机-控制回调执行'
// import App from './05_useContext的用法/App'
// import App from './06_useReducer的用法/App'
// import App from './07_useCallback的用法/App'
// import App from './08_useMenu的用法/App'
// import App from './09_useRef的用法/02_useRef绑定值-解决闭包陷阱'
// import App from './10_useImperativeHandle/App'
// import App from './11_useLayoutEffect的用法/03_切换数字-useLayoutEffect'
// import App from './12_自定义Hooks/App'
import App from './13_redux中的hooks/App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  // </React.StrictMode>
)
