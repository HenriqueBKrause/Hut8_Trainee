//Crie um algoritmo que imprime todos os valores de um array qualquer, menos oultimo elemento.

const sequencia = require('prompt-sync')();
console.log('Digite uma sequencia de 11 valores de sua preferencia: ');
volue = sequencia();
let array = [sequencia(), sequencia(), sequencia(), sequencia(), sequencia(), sequencia(), sequencia(), sequencia(), sequencia(), sequencia()];
console.log(array.slice(0, -1));
var ultimo = array.pop();

console.log("Fim do programa");
