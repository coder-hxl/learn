// 声明模块
declare module 'lodash' {
  export function join(arr: any[]): void
}

// 声明变量/函数/类
declare let names: string
declare let age: number

declare function fhFoo(): void

declare class Info {
  name: string
  age: number
  constructor(name: string, age: number)
}

// 声明文件
declare module '*.jpg'
declare module '*.png'
declare module '*.gif'

// 声明命名空间
declare namespace $ {
  export function ajax(settings: any): any
}
