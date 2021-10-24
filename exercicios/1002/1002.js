var input = require('fs').readFileSync('../../dev/stdin/file.txt', 'utf-8');
var lines = input.split('\n');

let raio = parseFloat(lines.shift());
const pi = 3.14159;
const A = pi * (raio * raio)
console.log(`A=${A.toFixed(4)}`)