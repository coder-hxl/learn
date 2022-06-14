#!/usr/bin/env node
const program = require('commander')
const helpOptions = require('./lib/core/help')
const commands = require('./lib/core/commands')

// 查看版本
program.version(require('./package.json').version)

// 帮助和可选
helpOptions()

// 创建命令
commands()

program.parse(process.argv)
