//1.Imprima no console 15 vezes a frase ‘Formação Otterwise’


const fraseimput = require('prompt-sync')();
console.log("Sugerimos que você use a frase 'Trainee Hut8!'");
const frase = fraseimput('Digite a frase: ');
for (let i = 0; i < 15; i++) {
    console.log(frase);
}   //fim do for

console.log("Fim do programa!");

