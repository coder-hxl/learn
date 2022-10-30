import React from 'react'
import { Link, useNavigate, useRoutes } from 'react-router-dom'
import routes from './router'

// import Home from './pages/Home'
// import HomeRecommend from './pages/HomeRecommend'
// import HomeRanking from './pages/HomeRanking'
// import HomeSongMenu from './pages/HomeSongMenu'
// import About from './pages/About'
// import Category from './pages/Category'
// import Detail from './pages/Detail'
// import User from './pages/User'
// import NotFound from './pages/NotFound'

import './style.css'

export default function App() {
  const navigate = useNavigate()

  function navigateTo(path) {
    navigate(path)
  }

  return (
    <div>
      <div className="header">
        <h1>Header</h1>

        <div className="nav">
          <Link to="/home">首页</Link>
          <Link to="/about">关于</Link>

          <button onClick={() => navigateTo('/category')}>分类</button>

          <Link to="/user?name=hxl&age=18">用户</Link>
        </div>

        <hr />
      </div>

      <div className="context">
        {/* <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />}>
            <Route
              path="/home"
              element={<Navigate to="/home/recommend" />}
            ></Route>
            <Route path="/home/recommend" element={<HomeRecommend />} />
            <Route path="/home/ranking" element={<HomeRanking />} />
            <Route path="/home/songmenu" element={<HomeSongMenu />} />
          </Route>
          <Route path="/about" element={<About />} />
          <Route path="/category" element={<Category />} />
          <Route path="/detail/:id" element={<Detail />}></Route>
          <Route path="/user" element={<User />}></Route>
          <Route path="*" element={<NotFound />} />
        </Routes> */}

        {useRoutes(routes)}
      </div>

      <div className="footer">
        <hr />
        <h1>Footer</h1>
      </div>
    </div>
  )
}
