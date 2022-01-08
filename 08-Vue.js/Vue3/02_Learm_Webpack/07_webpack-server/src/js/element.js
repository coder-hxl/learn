// 打包css模块需要使用css-loader
// import 'css-loader!../css/style.css' // 内联方式css-loader
import '../css/style.css'
import '../css/title.less'
import '../css/image.css'

import zznhImage from '../img/zznh.png'

import '../font/iconfont.css'

const divEl = document.createElement('div')
divEl.className = 'title'
divEl.innerHTML = '你好，浮幻'

// 设置背景图片
const pgDivEl = document.createElement('div')
pgDivEl.className = 'image-bg'

// 设置img元素的src属性
const imgEl = document.createElement('img')
imgEl.src = zznhImage

// 设置字体图标
const iFont = document.createElement('i')
iFont.className = 'iconfont icon-ashbin'

let content = 'Hello World'
console.log(content.length);

document.body.appendChild(divEl)
document.body.appendChild(pgDivEl)
document.body.appendChild(imgEl)
document.body.appendChild(iFont)

console.log('bbb')