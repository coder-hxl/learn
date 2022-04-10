// 引入 fs
const fs = require('fs')
const { resolve } = require('path/posix')

// 读取
function readWeiXue() {
    return new Promise((resolve, reject) => {
        fs.readFile('./resources/为学.md', (err, data) => {
            // 如果失败
            if (err) reject(err)

            // 如果成功
            resolve(data)
        })
    })
}

function readYangShi() {
    return new Promise((resolve, reject) => {
        fs.readFile('./resources/插秧诗.md', (err, data) => {
            // 如果失败
            if (err) reject(err)

            // 如果成功
            resolve(data)
        })
    })
}

function readGuanShu() {
    return new Promise((resolve, reject) => {
        fs.readFile('./resources/观书有感.md', (err, data) => {
            // 如果失败
            if (err) reject(err)

            // 如果成功
            resolve(data)
        })
    })
}

async function main() {
    // 获取内容
    let wx = await readWeiXue()
    let ys = await readYangShi()
    let gs = await readGuanShu()

    console.log(wx.toString());
    console.log(ys.toString());
    console.log(gs.toString());
}
main()