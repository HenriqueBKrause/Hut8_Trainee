//Dado um array de números, faça um programa que imprima na tela somente os 
//números positivos.
//OBS: Para melhorar a resolução desse problema, crie 
//funções que tambémimprima os números negativos, os pares, os ímpares e realize a
// contagem decada um deles

const array = [1, -7, -23, 25, -19, 13, 10, -8, 52, -153, -127]

//imprimindo nueros positivos
console.log("O array tem estes numeros positivo:")
for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
        console.log(array[i])
    }
}

//imprimindo numeros negativos
console.log("O array tem estes numeros negativo:") 
for (let i = 0; i < array.length; i++) {
    if (array[i] < 0) {
        console.log(array[i])
    }
}

//imprimindo numeros pares
console.log("O numeros pares são esses:");
for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
        console.log(array[i])
    }
}

//imprimindo numeros impares
console.log("O array tem estes numeros impares:")
for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 != 0) {
        console.log(array[i])
    }
}

console.log("Fim do programa");