var input = require('fs').readFileSync('../dev/stdin/file.txt', 'utf-8');
var lines = input.split('\n');

let num = parseInt(lines.shift());

let notasCem = parseInt( num / 100)
// let notasCinq = parseInt(( num - (notasCem * 100)) / 50);
// let notasVint =  
// console.log(notasVint);

let notasCem2 = Math.trunc(num / 100)
console.log(notasCem2);