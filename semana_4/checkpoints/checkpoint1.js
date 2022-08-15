//Através da string “Maria, Paulo, Moisés, Joel, Ana”, 
//imprima todos os nomes um emcada linha no console

//importando prompt
const nameimput = require('prompt-sync')();


//interação com o usuário
console.log("Digite os nomes que deseja imprimir: ");
console.log("Recomendamos que você use vírgula para separar os nomes");
        let names = nameimput("");

//separando os nomes
let namesArray = names.split(",");

//imprimindo os nomes
for(let i = 0; i < namesArray.length; i++){
    
    console.log(namesArray[i]);
}
