//Dado um array de números, mostre quantos valoressão pares, quantos sãoímpares, 
//quantos são positivos e quantos são negativos.

//entrada 
let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];


//Quantidade de pares
let even = number.filter(number => number % 2 == 0);

//Quantidade de ímpares
let odd = number.filter(number => number % 2 != 0);

//Quantidade de positivos
let positive = number.filter(number => number > 0);

//Quantidade de negativos
let negative = number.filter(number => number < 0);

//saida 
console.log(`Pares: ${even.length}`);
console.log(`Ímpares: ${odd.length}`);
console.log(`Positivos: ${positive.length}`);
console.log(`Negativos: ${negative.length}`);
