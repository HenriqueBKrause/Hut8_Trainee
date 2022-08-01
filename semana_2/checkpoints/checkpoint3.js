//Crie um algoritmo que tem como entrada um array de números e 
//imprime no console a soma dos elementos sendo cada um deles multiplicado pelo seu índice.
//Exemplo entrada: [5, 9, 10, 6]
//Exemplo Saída: 47

const volueimput = require('prompt-sync')();
console.log("Digite uma sequencia de numeros: ");
let sequencia = volueimput();

let sequenciaArray = sequencia.split(",");
let soma = 0;
console.log(sequenciaArray);
for (let i = 0; i < sequenciaArray.length; i++) {
    soma += sequenciaArray[i] * i;
}
console.log(soma);
console.log("Fim do programa!");

