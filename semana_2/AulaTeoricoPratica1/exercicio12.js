//Dado um array de números, faça um programa queencontre o menorelemento deste array e sua posição. 
//Mostre as informações encontradas no console.

const numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

const menor = numbers.sort((a, b) => a - b)[0];
const posicao = numbers.indexOf(menor);

console.log("Menor valor:" + menor);
console.log("Posição do menor valor:" + posicao);

