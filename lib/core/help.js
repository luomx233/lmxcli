const { program } = require('commander');

// 添加选项
const helpOpt = () => {
  program.option('koa', 'creat a koa program')
}

module.exports = helpOpt
