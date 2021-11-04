var input = require('fs').readFileSync('../../dev/stdin/file.txt', 'utf-8');
var lines = input.split('\n');


var linesOneInp = lines[0].split(' ');
var linesTwoInp = lines[1].split(' ');

const [x1, y1] = linesOneInp;
const [x2, y2] = linesTwoInp;

let resul = Math.sqrt(((x2 - x1) * (x2 - x1)) + ((y2 - y1) * (y2 - y1))).toFixed(4)
console.log(resul);