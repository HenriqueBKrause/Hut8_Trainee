// Dado um array de números como entrada,faça umprograma que multiplique todos os valores por 10.
// OBS: Para melhorar a resolução desse problema, monte um programa querecebe como parâmetro o 
// valor pelo qual os valores do array devem ser multiplicados;

let volue = require('prompt-sync')();

const array = [1, 8, 6, 13, 7, 9, 15, 22, 356, 4, 3]

console.log("Qual numero você deseja para ser o multiplicador:");
let multiplicador = volue();

for (let i = 0; i < array.length; i++) {
    array[i] = array[i] * multiplicador;
}
console.log(array.join(", "));