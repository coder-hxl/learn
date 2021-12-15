/* 
    process.env.npm_package_json文件的属性名 固定写法
        在脚本环境才能访问
        在npm命令下用来读取 package.json 的某个属性名的值 
*/

console.log(process.env.npm_package_name)