// 打包css模块需要使用css-loader
// import 'css-loader!../css/style.css' // 内联方式css-loader
import '../css/style.css'
import '../css/title.less'

const divEl = document.createElement('div')
divEl.className = 'title'
divEl.innerHTML = '你好，浮幻'

document.body.appendChild(divEl)