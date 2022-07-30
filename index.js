#!/usr/bin/env node
const { program } = require('commander');
const helpOpt = require('./lib/core/help');
const create = require('./lib/core/create');

// 使用version来显示版本
program.version(require('./package.json').version)

// 显示htlp
helpOpt()
// 创建功能导入
create()

// 通过parse获取参数
program.parse(process.argv)