//Crie uma função que recebe uma string (com quatro possibilidades: “soma”,“subtrai”, “divide”, “multiplica”) e dois números. 
//A função deve retornar a operaçãorealizada informada pela string nos dois números.


//inicio do codigo
const volueimputone = require('prompt-sync')();
const volueimputtwo = require('prompt-sync')();
const optionimput = require('prompt-sync')();

//entrada de dados
console.log("Digite um valor para a operação: ");
    let numone = Number(volueimputone());

console.log("Digite mais um valor para a operação: ");
    let numtwo = Number(volueimputtwo());

console.log("Escolha um tipo de operação: \nSoma \nSubtração \nMultiplicação \nDivisão");
    let option = optionimput();

//processamento
const operacao = (option, numone, numtwo) => {
    if (option === "soma") {
        return numone + numtwo;
    } 
        else if (option === "subtração") {
        return numone - numtwo;
    } 
        else if (option === "multiplicaçã0") {
        return numone * numtwo;
    } 
        else if (option === "divisão") {
        return numone / numtwo;
    }
}

//saida de dados
console.log("O resultado da operação é:" + operacao(option, numone, numtwo));
