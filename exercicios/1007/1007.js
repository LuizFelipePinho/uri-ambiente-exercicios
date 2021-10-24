var input = require('fs').readFileSync('../../dev/stdin/file.txt', 'utf-8');
var lines = input.split('\n');

const A = parseInt(lines.shift());
const B = parseInt(lines.shift());
const C = parseInt(lines.shift());
const D = parseInt(lines.shift());

console.log(`DIFERENCA = ${ (A * B) - (C * D )}`)
