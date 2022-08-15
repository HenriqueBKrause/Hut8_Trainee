// Crie um algoritmo que tem comoentrada um array de notas,e imprime no console a 
// média aritmética dessas notas.
// OBS: Para melhorar a resolução desse problema, monte um programa queretorna a 
// média aritmética independente do tamanho do array.

//solicitando prompt 
const volueimputone = require('prompt-sync')();
const volueimputtwo = require('prompt-sync')();

//solicitando o array
console.log("Digite sua primeira nota: ")
    const nota1 = Number(volueimputone());

console.log("Digite sua segunda nota: ")
    const nota2 = Number(volueimputtwo());

//processando
const media = (nota1 + nota2) / 2;


//imprimindo o resultado]
console.log("A média aritmética das notas é: " + media)



