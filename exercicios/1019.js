var input = require("fs").readFileSync("../dev/stdin/file.txt", "utf-8");
var lines = input.split("\n");

let num = parseInt(lines.shift());

let contMin = 0;
let contHr = 0;

while (true) {
  if (num >= 60) {
    num -= 60;
    contMin += 1;
  } else if (contMin >= 60) {
    contHr += 1;
    contMin -= 60;
  } else {
    break;
  }
}

let seg = num;

console.log(`${contHr}:${contMin}:${seg}`);



// while(true) {
//     if(contMin >= 60) {
//         contHr += 1
//         contMin -= 60
//     } else {
//         break
//     }
// }