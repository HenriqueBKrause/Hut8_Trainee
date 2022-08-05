//Crie um algoritmo que tem como entrada um arrayde notas, e imprime noconsole a média aritmética dessas notas.

const volueimputone = require('prompt-sync')();
const volueimputtwo = require('prompt-sync')();

console.log("Digite sua primeira nota: ");
var notaone = Number(volueimputone());

console.log("Digite sua segunda nota: ");
var notatwo = Number(volueimputtwo());

console.log("Sua média é: " + (notaone + notatwo) / 2);



