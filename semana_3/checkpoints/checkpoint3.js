//Crie uma função que recebe um objeto usuário e imprime 
//se ele é maior de idade,utilize os conhecimentos da aula para melhorar o código

//inicio do codigo
const nameimput = require('prompt-sync')();
const ageimput = require('prompt-sync')();


//entrada de dados
console.log("Digite seu nome: ");
    let name = nameimput();

console.log("Digite sua idade: ");
    let age = ageimput();


//processamento 
function maioridade(){
    if (age >= 18) {
        return ("O usuário " + name + " é maior de idade");
    }
    else {
        return ("O usuário " + name + " não é maior de idade");
    }
}

console.log(maioridade());

