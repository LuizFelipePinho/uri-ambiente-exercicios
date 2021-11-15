var input = require('fs').readFileSync('../dev/stdin/file.txt', 'utf-8');
var lines = input.split('\n');

let numbers = lines[0].split(' ');

let [a, b, c] = numbers;
let A = parseFloat(a);
let B = parseFloat(b);
let C = parseFloat(c);


let areaTri = (A, C) => console.log(`TRIANGULO: ${((A * C) / 2).toFixed(3)}`); 

let areaCir = (pi, C) => console.log(`CIRCULO: ${(pi * (C * C)).toFixed(3)}`)

let areaTra = (A,B,C) => console.log(`TRAPEZIO: ${(((A + B) * C)/2 ).toFixed(3)}`)

let areaQua = (B) => console.log(`QUADRADO: ${(B * B).toFixed(3)}`)

let areaRet = (A, B) => console.log(`RETANGULO: ${ (A * B).toFixed(3)}`)

areaTri(A, C);
areaCir(3.14159, C);
areaTra(A, B, C);
areaQua(B);
areaRet(A, B);


