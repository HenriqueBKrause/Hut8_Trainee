// Dado um array de nomes, faça umprograma que tenhacomo entrada um valor à ser
// pesquisado e retorne se o nome existe ou não noarray.

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
