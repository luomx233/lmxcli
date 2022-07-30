const { program } = require('commander');
const { createAction } = require('./action');
// 添加选项
const creat = () => {
  program
    .command('create <frameType> <projectName>')
    .description('create different project.')
    .action(createAction)
}

module.exports = creat
