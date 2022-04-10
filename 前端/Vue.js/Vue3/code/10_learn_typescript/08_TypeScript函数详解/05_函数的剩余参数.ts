// function sum(num1: number, num2: number) {
//   return num1 + num2
// }

function sum(...nums: number[]) {
  return nums.reduce((previous, current) => previous + current)
}

console.log(sum(20, 30))
console.log(sum(10, 20, 30, 40))
