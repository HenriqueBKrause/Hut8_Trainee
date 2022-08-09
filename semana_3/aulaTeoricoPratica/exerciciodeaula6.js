//Dado um array de números como entrada,faça umprograma que multiplique todos os valores por 10.OBS:
// Para melhorar a resolução desse problema, monte um programa querecebe como parâmetro o valor 
//pelo qual os valores do array devem sermultiplicados

//importação do prompt
const volueimput = require('prompt-sync')();

//array de numeros 
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Os numeros a serem multiplicados são: " + numeros);


//entrada de multiplicador
console.log("\nDigite o multiplicador");
let volueone = Number(volueimput());

//Função de multiplicar

function multiplicar(numeros, volueone) {
    for (let i = 0; i < numeros.length; i++) {
        numeros[i] = numeros[i] * volueone;
    }
    return numeros;
}
console.log(multiplicar(numeros, volueone));



