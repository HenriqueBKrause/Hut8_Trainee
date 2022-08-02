//Levando em consideração o array [6, 21, 9, 2, 50, 98, 1] crie uma função que mostrao maior numero da lista


const volueimput = require('prompt-sync')();
console.log("Digite uma sequencia de numeros separados por virgula de '0 a 9': ");
const imput = volueimput();
const array = imput.split(',');
let maior = 1;      
for (let i = 0; i < array.length; i++) {
    if (array[i] > maior) {
        maior = array[i];
    }
}
console.log("O maior numero da lista é: " + maior);
console.log("Obrigado por usar o programa!");