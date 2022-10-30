import { lazy } from 'react'
import { Navigate } from 'react-router-dom'

import Home from '../pages/Home'
import HomeRecommend from '../pages/HomeRecommend'
import HomeRanking from '../pages/HomeRanking'
import HomeSongMenu from '../pages/HomeSongMenu'
// import About from '../pages/About'
import Category from '../pages/Category'
import Detail from '../pages/Detail'
import User from '../pages/User'
import NotFound from '../pages/NotFound'

// 懒加载
const About = lazy(() => import('../pages/About'))

const routes = [
  {
    path: '/',
    element: <Navigate to="/home" />
  },
  {
    path: '/home',
    element: <Home />,
    children: [
      { path: '/home', element: <Navigate to="/home/recommend" /> },
      { path: '/home/recommend', element: <HomeRecommend /> },
      { path: '/home/ranking', element: <HomeRanking /> },
      { path: '/home/songmenu', element: <HomeSongMenu /> }
    ]
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/category',
    element: <Category />
  },
  {
    path: '/detail/:id',
    element: <Detail />
  },
  {
    path: '/user',
    element: <User />
  },
  {
    path: '*',
    element: <NotFound />
  }
]

export default routes
