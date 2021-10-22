// Para simular uma entrada coloque o valor em uma linha sozinho, caso queira mais entradas coloque-o na linha de baixo. Esse input vai trazer os valores da forma como foi escrito, no caso temos na linha 1 o numero 10, na linha 2 o numero 9.
var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf-8');

//o split vai retirar os espaços, restando assim somente os valores
var lines = input.split('\n');
console.log(`lines: ${lines}`)

//o shift 'recorta' o primeiro elemento da variavel lines e o retorna. O parseInt torna o valor em um número inteiro
var number1 = parseInt(lines.shift());
var number2 = parseInt(lines.shift());

console.log(number1 + number2)

// Esteja dentro do diretorio do arquivo e digite node nomeDoArquivo.js para executar o arquivo