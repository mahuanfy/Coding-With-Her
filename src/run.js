'use strict'
const readline = require("readline");
const main = require('./main');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// 终端输入
r1.on('line', function (line) {
    console.log(main(line));
});