const url = require('url')
const log4js = require('log4jf')
// let logger = log4js.getLogger()
// logger.level = "debug"

log4js.configure({
    appenders: { cheese: { type: "file", filename: "cheese.log" } },
    categories: { default: { appenders: ["cheese"], level: "error" } }
});

const urlString = new URL('https://www.baidu.com:443/path/index.html?id=2#tag=3')

console.log(urlString);