// 对象的属性之间可以用 , 或 ; 分割
// {x: number, y: number} 对象类型

function printPoint(point: {x: number, y: number}) {
  console.log(point.x);
  console.log(point.y);
}

printPoint({x: 10, y: 100})
