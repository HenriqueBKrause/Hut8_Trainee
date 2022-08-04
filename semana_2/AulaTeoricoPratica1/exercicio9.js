//Dado um número, faça um algoritmo que imprimeno console a soma detodos os números de 1 até o número escolhido. 
//Ex: Ao ter como entrada o valor 5, devem ser somados todos os números de 1 até 5 (1+2+3+4+5).

const valorimput = require('prompt-sync')();
console.log("Digite o valor desejado: ");
var valor = valorimput('');
var i = 0;
var soma = 0;
while (i < valor) {
    soma = soma + i;
    i++;
}
console.log(soma);
