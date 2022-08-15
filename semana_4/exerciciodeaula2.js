//- Dado um array de números, faça um programa queteste se este arraycontém um valor específico. 
//Tanto o valor quanto o array serão valores de entrada


const numbers = [1, 3, -12, 33, -1, 9, 110, -1168, 252, -15253, 2127]

const numimput = require('prompt-sync')();
console.log("Digite um numero: ")
    const num = numimput('')

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] == num) {
            console.log("O numero " + num + " está contido no array")
            break
        } 
        else 
            {
            console.log("O numero " + num + " não está contido no array")
        }
    }
