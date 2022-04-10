type ThisType = { name: string }

function eating(this: ThisType, message: string) {
  console.log(this.name, message)
}

const info = {
  name: 'fh',
  eating
}

// 隐式绑定
info.eating('哈哈哈')

// 显示绑定
eating.call({ name: 'code' }, '嘿嘿嘿')
eating.apply({ name: 'why' }, ['嘻嘻嘻'])

export {}
