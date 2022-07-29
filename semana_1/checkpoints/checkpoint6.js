//Faça uma função que recebe um valor inteiro e verifica se o valor é par. 
//A funçãodeve retornar um valor booleano se for par.

const prompt = require('prompt-sync')()
let n = prompt("Digite um numero: ");
let total = n / 2;

    if(total % 2 == 0){
        console.log("O numero é par");
    }
    else{ (total % 2 == 1)
        console.log("O numero é impar");
    }
