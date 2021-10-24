var input = require('fs').readFileSync('../../dev/stdin/file.txt', 'utf-8');
var lines = input.split('\n');

const n1 = parseInt(lines.shift());
const n2 = parseInt(lines.shift());
console.log(`PROD = ${n1 * n2}`);
