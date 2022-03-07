// namespace命名空间: 将模块内部在进行作用域划分，防止命名冲突的问题

export namespace time {
  export function format(time: string) {
    return '2022-02-14'
  }

  export function foo() {

  }

  export let name: string = 'fh'
}

export namespace price {
  export function format(price: number) {
    return '￥99.99'
  }
}


time.format('2020')
time.foo()
time.name
