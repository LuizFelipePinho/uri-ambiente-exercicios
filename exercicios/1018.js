var input = require('fs').readFileSync('../dev/stdin/file.txt', 'utf-8');
var lines = input.split('\n');

let num = parseInt(lines.shift());


let restCem = num % 100;
let notasCem = (num - restCem) / 100;

let resCinq = restCem % 50;
let notasCinq = (restCem - resCinq ) / 50;

let resVint = resCinq % 20;
let notasVint = (resCinq - resVint) / 20;

let resDez = resVint % 10;
let notasDez = (resVint - resDez) / 10;

let resCinc = resDez % 5;
let notasCinc = (resDez - resCinc) / 5;

let resDois = resCinc % 2;
let notasDois = (resCinc - resDois) / 2;

let resUm = resDois % 1; 
let notasUm = (resDois - resUm) / 1;



console.log(num);
console.log(`${notasCem} nota(s) de R$ 100,00`);
console.log(`${notasCinq} nota(s) de R$ 50,00`);
console.log(`${notasVint} nota(s) de R$ 20,00`);
console.log(`${notasDez} nota(s) de R$ 10,00`);
console.log(`${notasCinc} nota(s) de R$ 5,00`);
console.log(`${notasDois} nota(s) de R$ 2,00`);
console.log(`${notasUm} nota(s) de R$ 1,00`);


