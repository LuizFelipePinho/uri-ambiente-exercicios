var input = require('fs').readFileSync('../../dev/stdin/file.txt', 'utf-8');
var lines = input.split('\n');

let nome = lines.shift();
let sala = parseFloat(lines.shift());
let vend = parseFloat(lines.shift());

console.log(`TOTAL = R$ ${ ((vend * 0.15) + sala).toFixed(2) }`)
