var input = require('fs').readFileSync('../../dev/stdin/file.txt', 'utf-8');
var lines = input.split('\n');

var primeiro = lines.shift().split(" ");
var cod1 = parseInt(primeiro[0]);
let qtd1 = parseInt(primeiro[1]);
let valor1 = parseFloat(primeiro[2]);

var segundo = lines.shift().split(" ");
var cod2 = parseInt(segundo[0]);
let qtd2 = parseInt(segundo[1]);
let valor2 = parseFloat(segundo[2]);


console.log(`VALOR A PAGAR: ${ ( (qtd1 * valor1) + (qtd2 * valor2) ).toFixed(2) }`)
