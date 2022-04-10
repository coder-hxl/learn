// 可选类型：在属性后面添加 ? ，表示可以传或不传
// z?: number 可选类型

function printPoint(point: { x: number; y: number; z?: number }) {
  console.log(point.x)
  console.log(point.y)
  console.log(point.z)
}

printPoint({ x: 10, y: 100 })
printPoint({ x: 10, y: 100, z: 100 })

export {}
