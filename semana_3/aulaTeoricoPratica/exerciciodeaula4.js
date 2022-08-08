//Crie um algoritmo que tem como entrada um número eimprime a sua tabuada do 1 ao 10.
//Para melhorar a resolução desse problema, monte um código que aceiteum segundo valor e 
//irá imprimir a tabuada de 1 até esse valor.



//inicio do codigo
const numimput = require('prompt-sync')();
const numimputtwo = require('prompt-sync')();


//entrada 
console.log("Digite um numero: ");
        let num = numimput('');

console.log("Digite um segundo numero: ");
        let numtwo = numimputtwo('');


//processamento
for (let i = 1; i <= numtwo; i++) {
    console.log(num + " x " + i + " = " + num * i);
}   
//saida
console.log("Tabuada do " + num + " até " + numtwo);

