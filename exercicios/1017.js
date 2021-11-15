var input = require('fs').readFileSync('../dev/stdin/file.txt', 'utf-8');
var lines = input.split('\n');

let tem = parseInt(lines.shift());
let vel = parseInt(lines.shift());

console.log(`${((vel * tem) / 12).toFixed(3)}`);

