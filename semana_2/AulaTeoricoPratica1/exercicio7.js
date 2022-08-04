//Escreva um programa que tenha como entrada umvalor. 
//Este valor é aquantidade de linhas de saída que serão apresentadas na execução doprograma.

var valorimput = require('prompt-sync')();
console.log("Digite a quantidade de linhas que deseja imprimir: ");
var valor = valorimput(''); 
var i = 0;
while (i < valor) {
    console.log(i);
    i++;
}
