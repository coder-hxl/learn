const _ = require('lodash')

// let arr = [1,2,3,4,5,6,7,8]
// let arr2 = _.chunk(arr, 2)
// console.log(arr2);
// 输出：[ [ 1, 2 ], [ 3, 4 ] ]

function myChunk(arr,shu) {
    let arr2  =  _.chunk(arr, shu)
    return arr2
}

module.exports = myChunk