import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'

import homeReducer from './home'
import counterReducer from './counter'

// 合并reducer
const reducer = combineReducers({
  home: homeReducer,
  counter: counterReducer
})

// combineReducers的实现过程
// function reducer(state = {}, action) {
//   return {
//     home: homeReducer(state.home, action),
//     counter: counterReducer(state.counter, action)
//   }
// }

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

export default store
