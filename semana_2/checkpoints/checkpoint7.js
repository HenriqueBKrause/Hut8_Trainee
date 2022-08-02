//Crie uma função que conte quantas palavras existem na frase que for passada comoparâmetro 
//(dica: utilizem o método split de string)


//importando a biblioteca
const fraseimput = require('prompt-sync')();

console.log("Digite uma frase: ");

const imput = fraseimput();
const array = imput.split(' ');

//função
    let contador = 0;
    for (let i = 0; i < array.length; i++) {
        contador++;
    }


//imprimindo o resultado
console.log("A frase tem " + contador + " palavras.");
console.log("Obrigado por usar o programa!");
