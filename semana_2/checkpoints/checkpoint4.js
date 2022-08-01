//Crie um algoritmo que tem como entrada um objeto e imprime no console os nomesdos projetos ativos do usuário

console.log("Usuários disponiveis: \n Henrique \n Fernando \n Gabriel");

const userimput = require('prompt-sync')();
console.log("Digite o nome do usuário: ");
user=userimput();

if(user == "Henrique") {
    console.log("Projetos ativos: ");
    console.log("Processo seletivo", "start: 23/12/2002" );
    console.log("Hut8", "start: 01/08/2022" );
} else if (user == "Fernando ") {
    console.log("Projetos ativos: ");
    console.log("Hut8", "start: 01/08/2022" );
} else if (user == "Gabriel ") {
    console.log("Projetos ativos: ");
    console.log("Formação Otterwise", "start: 01/08/2022" );
}
