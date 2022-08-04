//Crie um algoritmo que tem como entrada um númeroe imprime a suatabuada do 1 ao 10.


const numberimout = require('prompt-sync')();

console.log('Digite um número: ');
    let number = numberimout();
 
for (let i = 1; i <= 10; i++) {
    console.log(number * i);
}
console.log("Obrigado por usar o programa!");
