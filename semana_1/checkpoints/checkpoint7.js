//Faça uma função que recebe a idade de um nadador e retorna a categoria dessenadador de acordo com a tabela abaixo:
//Idade - Categoria
//5 a 7 anos - Infantil A
//8 a 10 anos - Infantil B
//11 - 13 anos - Juvenil A
//14 - 17 anos - Juvenil B
//Maiores de 18 anos (inclusive) - Adulto


//Apresentação
console.log("Olá, configurararemos a categoria do nadador de acordo com sua idade!");


//entrada
let ageimput = require('prompt-sync')();
console.log("Digite a sua idade:");
let age = ageimput();


//saída
    if(age >= 5 && age <= 7){
        console.log("Infantil A");
    }       else if(age >= 8 && age <= 10){
        console.log("Infantil B");
    }     else if(age >= 11 && age <= 13){
        console.log("Juvenil A");
    }   else if(age >= 14 && age <= 17){ 
        console.log("Juvenil B");
    }  else if(age >= 18){
        console.log("Adulto");
    } else{
        console.log("Não esta apto!");
    } //Fim do if

