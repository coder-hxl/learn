/* 
    process.env.npm_package_前缀
        在脚本环境才能通过npm命令访问在 package.json 的某个属性名的值 
*/

console.log(process.env.npm_package_name)