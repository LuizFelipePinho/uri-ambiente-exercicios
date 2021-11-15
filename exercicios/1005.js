var input = require('fs').readFileSync('../dev/stdin/file.txt', 'utf-8');
var lines = input.split('\n');

let n1 = parseFloat(lines.shift());
let n2 = parseFloat(lines.shift());
console.log(`MEDIA = ${ ( ( (n1 * 3.5) + (n2 * 7.5) ) / 11 ).toFixed(5)}`);