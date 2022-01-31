// 当前getLength函数，在其他地方调用时，没有做任何的参数效验
// 1> 没有对类型进行效验
// 2> 没有对是否传入参数进行效验
function getLength(str) {
  console.log(str.length);
}

getLength('Hello World') // 正确的调用
getLength('你好啊，浮幻')

getLength() // 错误的调用（IDE并不会报错）


// 永远执行不到
console.log('成千上万行的JavaScript代码');
