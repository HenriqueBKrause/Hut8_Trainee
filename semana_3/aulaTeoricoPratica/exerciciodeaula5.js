//Dado um array de números, façaum programa que imprimana tela somente os números positivos.OBS: 
//Para melhorar a resolução desse problema, crie funções que tambémimprimem os números negativos,
//os pares, os ímpares e realize a contagem decada um deles.


//inicio do codigo
const numimput = require('prompt-sync')();

//entrada
console.log("Diite uma sequencia de numeros: ");
        let num = numimput('');


//processamento
    if (num > 0) {
        console.log(num);
}
   if (num < 0) {
        console.log("A sequencia de numeros negativos é:"  + num);
}

    if(num % 2 == 0){
        console.log("A sequencia de numeros pares é:" + num);
}

    if(num % 2 != 0){
        console.log("A sequencia de numeros impares é:" + num);
}


//FIM DO CODIGO

console.log("Obrigado por utilizar o nosso programa!");
