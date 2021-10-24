var input = require('fs').readFileSync('../../dev/stdin/file.txt', 'utf-8');
var lines = input.split('\n');

let numFunc = parseInt(lines.shift());
let hrsTrab = parseInt(lines.shift());
let valHora = parseFloat(lines.shift());

console.log(`NUMBER = ${numFunc}`);
console.log(`SALARY = U$ ${ (hrsTrab * valHora).toFixed(2) }`);