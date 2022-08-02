//Através do array de usuários abaixo imprima no console todas a skills que cadausuario tem:


const userimput = require('prompt-sync')(); 


const users = [
        {name: "Joao",
            skills: ["Javascript", "ReactJS", "Redux"]},
            {name: "Pedro",
                skills: ["VueJS", "Ruby on Rails", "Elixir"]}
    ]
console.log("Os usuarios disponiveis são: \n 1-joao \n 2-Pedro");
console.log("Digite o número do seu usuário: ");
var selection=userimput();

if (selection == 1) {
    console.log(users[0]);

    } else if (selection == 2) {
    console.log(users[1]);

    } else {
    console.log("Usuario não encontrado");
}

console.log("Obrigado por usar o programa!");
