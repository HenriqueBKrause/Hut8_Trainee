//Crie um algoritmo que tem como entrada um objeto e imprime no console os nomesdos projetos ativos do usuário

// Este algoritimo esta resolvido de forma diferente, mas tem duas resolução, uma mais simples e uma mais complexa.
//Sendo a mais simples no arquivo checkpoint4.js e a mais complexa no arquivo checkpoint5.js

let userimput = require('prompt-sync')();

    console.log("Os usuarios disponiveis são: \n 1-Henrique \n 2-Fernando \n 3-Gabriel");
    console.log("Digite o número do seu usuário: ");

var selection=userimput();

var user = [
    { name: "Henrique Borges Krause", 
    project: [{ name: "Processo seletivo", start: "23/12/2002" }] 
    },
   
    { name: "Fernando Alvarenga", 
    project: [{ name: "Hut8", start: "01/08/2022" }] 
    },
   
    { name: "Gabriel Toledo", 
    project: [{ name: "Formação Otterwise", start: "01/08/2022" }] 
    }
]

if (selection == 1) {
    console.log(user[0]);

}   else if (selection == 2) {
    console.log(user[1]);

}   else if (selection == 3) {
    console.log(user[2]);
    
}   else {
    console.log("Usuario não encontrado");
}