//Dado um array de números, faça um programa que encontreo menor elemento deste array e sua posição. 
//Mostre as informaçõesencontradas no console.OBS: Para melhorar a resolução desse problema, 
//monte um programa quetambém consegue retornar qual o maior valor e qual a sua posição.

//Declarando um array 
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


//Função que retorna o menor valor do array
function menorvalor(array) {
    let menor = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] < menor) {
            menor = array[i];
        }
    }
    return menor;
}
console.log(menorvalor(array));

function posiçãoMenor(array) {
    let menor = array[0];
    let posicao = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] < menor) {
            menor = array[i];
            posicao = i;
        }
    }
    return posicao;
}

console.log(posiçãoMenor(array));


//função extra de maior valor e sua posição 

function maiorValor(array){
    let maior = array[0];
    let posicao = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > maior) {
            maior = array[i];
            posicao = i;
        }
    }
}

console.log(maiorValor(array));


function posiçãoMaior(array){
    let maior = array[0];
    let posição = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > maior) {
            maior = array[i];
            posição = i;
        }
    }
    return posição;
}

console.log(posiçãoMaior(array));
