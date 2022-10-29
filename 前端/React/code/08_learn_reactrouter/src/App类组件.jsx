import React, { PureComponent } from 'react'
import { Link, Routes, Route, Navigate, useNavigate } from 'react-router-dom'

import Home from './pages/Home'
import HomeRecommend from './pages/HomeRecommend'
import HomeRanking from './pages/HomeRanking'
import About from './pages/About'
import Category from './pages/Category'
import NotFound from './pages/NotFound'

import './style.css'

export class App extends PureComponent {
  navigateTo(path) {
    // 不能在class组件中使用useNavigate , 需在hook组价中使用
    // const navigate = useNavigate()
    // navigate(path)
  }

  render() {
    return (
      <div>
        <div className="header">
          <h1>Header</h1>

          <div className="nav">
            {/* <NavLink to="/home" style={({ isActive }) => ({ color: isActive ? 'red' : '' })}>首页</NavLink>
            <NavLink to="/about" style={({ isActive }) => ({ color: isActive ? 'red' : '' })}>关于</NavLink> */}

            {/* <NavLink to="/home" className={({ isActive }) => (isActive ? 'link-active' : '')}>首页</NavLink>
            <NavLink to="/about" className={({ isActive }) => (isActive ? 'link-active' : '')}>关于</NavLink> */}

            <Link to="/home">首页</Link>
            <Link to="/about">关于</Link>

            <button onClick={() => this.navigateTo('/category')}>分类</button>
          </div>

          <hr />
        </div>

        <div className="context">
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />}>
              <Route
                path="/home"
                element={<Navigate to="/home/recommend" />}
              ></Route>
              <Route path="/home/recommend" element={<HomeRecommend />} />
              <Route path="/home/ranking" element={<HomeRanking />} />
            </Route>
            <Route path="/about" element={<About />} />
            <Route path="/category" element={<Category />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>

        <div className="footer">
          <hr />
          <h1>Footer</h1>
        </div>
      </div>
    )
  }
}

export default App
