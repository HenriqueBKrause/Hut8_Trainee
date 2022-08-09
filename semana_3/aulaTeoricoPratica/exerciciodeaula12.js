//Faça um programa que recebe um array e uma funçãocomo parâmetro epercorre
//todo o array aplicando a função em cada um dos elementos do array.



//Entrada dos arrays

const voluesone = [1, 8, 6, 13, 7, 9, 15, 22, 356, 4, 3]
const voluestwo = [10, 80, 60, 130, 70, 90, 150, 220, 3560, 40, 30]



//funções 

function multiploicao(voluesone){
    for(let i = 0; i < voluesone.length; i++){
        console.log(voluesone[i] * 10)
    }
    return voluesone;
}

console.log("O resultado da multipliacação dos números é: ");
console.log(multiploicao(voluesone));


function divisao(voluestwo){
    for(let i = 0; i < voluestwo.length; i++){
        console.log(voluestwo[i] / 10)
    }
    return voluestwo;
}

console.log("O resultado da divisão dos números é: ");
console.log(divisao(voluestwo));
