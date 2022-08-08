//Crie uma função que recebe duas notas como argumento e retorna a médiaentre elas.
// Utilize arrow function e atribua a uma constante

//inicio do codigo 
const volueimputone = require('prompt-sync')();
const volueimputtwo = require('prompt-sync')();


//entrada de dados
console.log("Digite sua primeira nota: ");
     volueone = Number(volueimputone());

console.log("Digite sua segunda nota: ");
      voluetwo = Number(volueimputtwo());

//processamneto   
const sum = (volueone, voluetwo) => {
    
    return (volueone + voluetwo) / 2;
}   

//saida de dados
console.log("Sua primeira nota é:" + volueone);
console.log("Sua segunda nota é:" + voluetwo);
console.log("A media das notas é:" + sum(volueone, voluetwo));


//fim do codigo


