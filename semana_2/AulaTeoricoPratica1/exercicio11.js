// Dado um array de nomes, faça um programa quetenha como entrada umvalor 
//a ser pesquisado e retorne se o nome existe ou não no array


const name = [ 'Juliana', 'Pedro', 'Regina', 'João', 'Patrícia', 'Gabriel', 'Carlos', 'Carla' ];


const nameimput = require('prompt-sync')();

console.log("Digite o nome que deseja pesquisar: ");
var nametwo = nameimput();

if (name.includes(nametwo)) {
    console.log("O nome", nametwo, "existe no array");
}
else {
    console.log("O nome não existe no array");
}   
