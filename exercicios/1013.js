var input = require('fs').readFileSync('../dev/stdin/file.txt', 'utf-8');
var lines = input.split('\n');

let numbers = lines[0].split(' ');

let a = parseInt(numbers.shift())
let b = parseInt(numbers.shift())
let c = parseInt(numbers.shift())

if(a >= b && a >= c) {
    console.log(`${a} eh o maior`);

} else if (b >= a && b >= c){
    console.log(`${b} eh o maior`);

} else if (c >= a && c >= b) {
    console.log(`${c} eh o maior`);

}


