// 编程范式：命令式编程/声明式编程
// 编程范式：面向对象编程（第一公民：对象）/函数式编程（第一公民：函数）

// 高阶函数：filter/map/reduce
const nums = [10, 20, 111, 222, 444, 40, 50]

let totals = nums
  .filter((n) => n < 100)
  .map((n) => n * 2)
  .reduce((pre, n) => pre + n, 0)
console.log(totals) // 240

// 1.filter()的使用
/* 
  filter的回调函数必须返回布尔值
    - true：函数内部会将这次回调的元素n加入到新数组中
    - false：函数内部会过滤这次回调的元素n
 */
let newNums = nums.filter((n) => {
  return n < 100
})

// 2.map()的使用
let newNums2 = newNums.map((n) => {
  return n * 2
})

// 3.reduce()的使用
/* 
  reduce作用对数组中所有的内容进行汇总
    - 参数1:：回调函数
      - 第一个参数为初始值，是reduce函数里上一次return的值，第一次为reduce函数里面的第二个参数，也就是初始值
      - 第二个参数为数组当前元素
    - 参数2：初始值
      - 作为回调函数里面的初始值，默认为0
 */
let total = newNums2.reduce((preValue, n) => {
  return preValue + n
}, 0)
console.log(total) // 240

// 第一次：preValue:0  n:20
// 第二次：preValue:20  n:40
// 第三次：preValue:60  n:80
// 第四次：preValue:140  n:100
// 240
