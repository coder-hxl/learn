function loginAuth(OriginComponent) {
  return (props) => {
    const isLogin = localStorage.getItem('token')
    return isLogin ? <OriginComponent {...props} /> : '请登录后查看'
  }
}

export default loginAuth
