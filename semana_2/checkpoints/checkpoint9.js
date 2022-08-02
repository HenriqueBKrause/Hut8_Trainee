//Crie uma função chamada rockPaperScissorsWinner e recebe dois valores comoparâmetro. 
//Esses dois valores podem ser:
//        ●0: tesoura 
//        ●1: papel
//        ●2: pedra
//Construa um algoritmo que recebe esses valores randomicamente e printa na telaqual usuário ganhou, se o usuário 1 ou usuário2

const optionone = require('prompt-sync')();
const optiontwo = require('prompt-sync')();


console.log("================ Vamos jogar rock paper scissors ====================");
console.log("=====================Vamos jogar=============================");
console.log("Boa sorte!");

console.log("As opções são: \n 0 - Tesoura \n 1 - Papel \n 2 - Pedra");
console.log("Player1 escolha umas das opções:")
        let player1 = optionone();   
console.log("Player2 escolha umas das opções:")
        let player2 = optiontwo();



    rockPaperScissorsWinner(player1, player2);

function rockPaperScissorsWinner(player1, player2) {
    if (player1 == player2) {
        console.log("Empate");
    } 
        else if (player1 == 0 && player2 == 1) {
        console.log("O Player 1 ganhou");
    } 
        else if (player1 == 0 && player2 == 2) {
        console.log("O Player 2 ganhou");
    } 
        else if (player1 == 1 && player2 == 0) {
        console.log("O usuário 2 ganhou");
    }
         else if (player1 == 1 && player2 == 2) {
        console.log("O usuário 1 ganhou");
    } 
        else if (player1 == 2 && player2 == 0) {
        console.log("O usuário 1 ganhou");
    } 
        else if (player1 == 2 && player2 == 1) {
        console.log("O usuário 2 ganhou");
    }
}


console.log("Vamos Jogas de novo??");
console.log("Hummm ta com medinho, bora jogar de novo?");


