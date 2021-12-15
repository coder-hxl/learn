// const  axios = require('axios')

// axios.get(`https://m.maoyan.com/ajax/moreClassicList?sortId=1&showType=3&limit=10&offset=30&
// optimus_uuid=A5518FF0AFEC11EAAB158D7AB0D05BBBD74C9789D9F649898982E6542C7DD479&optimus_risk_l
// evel=71&optimus_code=10`).then(val =>{
//     console.log(val.data);
// }).catch(err =>{
//     console.log(err);
// })


// 使用了自己发布的自定义模块
const myChunk = require('fh-modules')

console.log(myChunk([1,2,3,4],2));
