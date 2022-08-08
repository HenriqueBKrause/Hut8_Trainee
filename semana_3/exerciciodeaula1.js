//Pegue um valor de entrada e calculeo menor número denotas possíveis (cédulas) no qual o valor pode ser decomposto. 
//As notasconsideradas são de 100, 50, 20, 10, 5, 2 e 1. A seguir mostre o valor lido e arelação de notas necessárias

//inicio do codigo
const valorimput = require('prompt-sync')();

//entrada do valor
console.log("Digite o valor: ");
let valor = valorimput();

//processamento
function notasdisponiveis(valor){
    let notas = [100, 50, 20, 10, 5, 2, 1];
    let notasdisponiveis = [];
    for(let i = 0; i < notas.length; i++){
        while(valor >= notas[i]){
            valor -= notas[i];
            notasdisponiveis.push(notas[i]);
        }
    }
    return notasdisponiveis;
}

//saida
console.log("Notas disponiveis: " + notasdisponiveis(valor));