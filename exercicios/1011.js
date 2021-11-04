var input = require('fs').readFileSync('../../dev/stdin/file.txt', 'utf-8');
var lines = input.split('\n');

let raio = parseInt(lines.shift());

let vol = (4/3) * 3.14159 * (raio * raio * raio);
console.log(`VOLUME = ${vol.toFixed(3)}`);