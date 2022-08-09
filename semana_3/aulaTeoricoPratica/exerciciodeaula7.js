//Crie um algoritmo que tem como entrada um array de notas,e imprime no console a média aritmética dessas notas.OBS:
// Para melhorar a resolução desse problema, monte um programa queretorna a média aritmética independente do tamanho do array.


//importação do prompt
const volueone = require('prompt-sync')();
const voluetwo = require('prompt-sync')();

//entrada
console.log("Digite as notas do aluno: ");
let notas = [];
for (let i = 0; i < 3; i++) {
    notas[i] = Number(volueone());
}
console.log(notas);

//função de média
function media(notas) {
    let soma = 0;
    for (let i = 0; i < notas.length; i++) {
        soma = soma + notas[i];
    }
    return soma / notas.length;
}   
console.log("A média aritmética é: " + media(notas));
