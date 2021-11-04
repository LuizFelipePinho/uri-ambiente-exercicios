var input = require('fs').readFileSync('../../dev/stdin/file.txt', 'utf-8');
var lines = input.split('\n');

var linesOneInp = lines[0].split(' ');
var linesTwoInp = lines[1].split(' ');

const [cod1, qtd1, valor1] = linesOneInp;
const [cod2, qtd2, valor2] = linesTwoInp;

console.log(`VALOR A PAGAR: R$ ${ ( (qtd1 * valor1) + (qtd2 * valor2) ).toFixed(2) }`)


