# node package versions
- 13.4.6
- major: 13, minor: 4, patch: 6
# npm 版本符号
- ^ : 锁定major
- ~ : 锁定minor
- 空 : 锁定patch
- * : 最新版本

# node的浏览端调试
- node --inspect --inspect-brk server.js

# node进程管理工具
- supervisor
- nodemon
- forever
- pm2

# yarn 源
https://zhuanlan.zhihu.com/p/35856841

# express template
- ejs
- pug
- jade
- art-template

# 页面render
- SSR (Server Side Render)
- CSR (Client Side Render)
- http://aui.github.io/art-template/

# mongodb
robo 3T

# Node.js项目
### 前端（Frontend）
- 前端工程化环境（webpack）
- CSS 预处理工具（sass）
- JS模块化：ES Module, CommonJS Module
- JS库：jQuery
- SPA：single page application，路由：SME-Router
- UI 组件库：Bootstrap(AdminLTE)
- RMVC: Art-template

### 后端（Backend）
- Node.js
- Express(static, Router, randomstring, bcrypt, cookie-session)
- MongoDB (Mongoose)
- EJS
- jwt(json web token)
- RMVP

### 开发架构
- 前后端分离的开发架构

### 秘钥生成
> openssl
生成私钥：
openssl > genrsa -out rsa_private_key.pem 2048

根据私钥生成公钥：
openssl > rsa -in rsa_private_key.pem -pubout -out rsa_public_key.pem