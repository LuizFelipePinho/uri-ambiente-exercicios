var input = require("fs").readFileSync("../dev/stdin/file.txt", "utf-8");
var lines = input.split("\n");

let num = parseInt(lines.shift());

let contAno = 0;
let contMes = 0;

while(true) {
    if(num >= 365) {
        contAno += 1;
        num -= 365;
    } else if(num >= 30) {
        contMes += 1;
        num -= 30;

    } else {
        break;
    }
}

let dias = num;

console.log(`${contAno} ano(s)`);
console.log(`${contMes} mes(es)`);
console.log(`${dias} dia(s)`);