var input = require('fs').readFileSync('../dev/stdin/file.txt', 'utf-8');
var lines = input.split('\n');

let x = parseInt(lines.shift());
let y = parseFloat(lines.shift());

let med = x / y
console.log(`${med.toFixed(3)} km/l`);
