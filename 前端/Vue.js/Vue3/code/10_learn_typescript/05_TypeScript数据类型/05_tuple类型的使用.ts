// tuple元组：多种元素的组合

// 1.数组的弊端
// const info: any[] = ['fh', 18]
// // info里的元素都是any类型
// const names = info[0]
// console.log(names.length);

// 2.元组的特点
const info: [string, number] = ['fh', 18]

const names = info[0]
console.log(names.length)
const age = info[1]
// console.log(age.length);
