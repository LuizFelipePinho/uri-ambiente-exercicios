var input = require("fs").readFileSync("../dev/stdin/file.txt", "utf-8");
var lines = input.split("\n");


var valor = parseFloat(lines.shift().replace(",", "."));
let cedula = [
  100.0, 50.0, 20.0, 10.0, 5.0, 2.0, 1.0, 0.5, 0.25, 0.1, 0.05, 0.01,
];
let aux = 0;
console.log("NOTAS:");
for (let i = 0; i < 6; i++) {
  aux = parseInt(valor / cedula[i]);
  console.log(`${aux} nota(s) de R$ ${cedula[i].toFixed(2)}`);
  valor = valor % cedula[i];
}
console.log("MOEDAS:");
for (let j = 6; j < cedula.length; j++) {
  aux = parseInt(valor / cedula[j]);
  console.log(`${aux} moeda(s) de R$ ${cedula[j].toFixed(2)}`);
  valor = (valor % cedula[j]) + 0.00001;
}
