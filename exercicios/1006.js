var input = require('fs').readFileSync('../dev/stdin/file.txt', 'utf-8');
var lines = input.split('\n');

let A = parseFloat(lines.shift());
let B = parseFloat(lines.shift());
let C = parseFloat(lines.shift());

console.log(`MEDIA = ${ (( ( A * 2) + (B * 3) + (C * 5) ) / 10).toFixed(1) }`);

