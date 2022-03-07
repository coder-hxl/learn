// message? -> undefined | string
function printMessageLength(message?: string) {
  // if (message) {
  //   console.log(message.length);
  // }

  // 非空断言：在标识符后添加 ! ，表示是有值的，跳过ts在编译阶段对它的检测；
  console.log(message!.length);
}

printMessageLength('aaa')
