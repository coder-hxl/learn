// ??操作符

let message: string | null = 'Hello'

const content = message ?? '你好'
// const content = message ? message : '你好'
console.log(content);
