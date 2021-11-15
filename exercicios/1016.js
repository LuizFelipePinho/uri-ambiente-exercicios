var input = require('fs').readFileSync('../dev/stdin/file.txt', 'utf-8');
var lines = input.split('\n');

let n1 = parseInt(lines.shift());

console.log(`${n1 * 2} minutos`);