// 一个参数是可选类型时，这个参数类似于是 类型|undefined 的联合类型

function foo1(message?: string) {
  console.log(message);
}

foo1()

function foo2(message: string|undefined) {
  console.log(message);
}

foo2(undefined)
