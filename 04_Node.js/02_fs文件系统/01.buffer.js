/* 
    Buffer(缓存区)
        - Buffer的结构和数组很像，操作的方法也和数组类似
        - 数组中不能存储二进制的文件，而Buffer就是专门用来存储二进制数据
        - 使用Buffer不需要引入模块，直接使用即可
        - 在Buffer中存储的是二进制数据，显示时以16进制的形式显示
        - Buffer中的一个元素，占用内存的一个字节
        - Buffer的大小一旦确定，则不能修改，Buffer实际上是对底层内存直接操作
 */

let str = 'Hello 浮幻'

// 将字符串存到Buffer中
let buf = Buffer.from(str)
// console.log(buf); 
// - 打印：<Buffer 48 65 6c 6c 6f 20 66 75 68 75 61 6e>
// console.log(buf.length); // 占用内存的长度 一个字母占1个字节，一个汉字占3个字节  
// - 打印：12
// console.log(str.length); // 字符串的长度    
// - 打印：8


// 开辟一个指定大小空的Buffer
let buf2 = Buffer.alloc(10) // 10个字节的Buffer
// console.log(buf2.length);
// - 打印：10
// 通过索引，来操作Buffer中的元素
buf2[0] = 88
buf2[1] = 255
buf2[2] = 0xaa
buf2[10] = 15 // 无效
// console.log(buf2);
// 打印：<Buffer 58 ff aa 00 00 00 00 00 00 00>

// 只要数字在控制台或页面中输出一定是10进制，可以通过toString()改变进制
// console.log(buf2[2].toString(16));


// Buffer.allocUnsafe(size) 开辟一个指定大小的Buffer，但是里面中可能含有敏感数据
let buf3 = Buffer.allocUnsafe(10)
// console.log(buf3);


/* 
    Buffer.from(str) 将一个字符串转换为Buffer
    Buffer.alloc(size) 创建一个指定大小的Buffer
    Buffer.allocUnsafe(size) 创建一个指定大小的Buffer，但是可能含有敏感数据
    toString() 将缓冲区的数据转换为字符串
*/

let buf4 = Buffer.from('我是文本数据')
console.log(buf4.toString())