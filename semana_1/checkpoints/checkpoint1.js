//------------- Checkpoint de Exercícios 1-------------------\\
//Crie variáveis para armazenar algumas informações de cadastro de um estudante,
//são elas: nome, sobrenome, dia do nascimento, mês do nascimento, ano donascimento, 
//primeira nota e segunda nota. A partir dessas informações, você devemostrar um relatório na 
//tela da seguinte forma: Nome Completo, Idade, Data deNascimento e Média;


//Importação de projeto
let nameone = require('prompt-sync')();
let nametwo = require('prompt-sync')();
let dayimput = require('prompt-sync')();
let monthimput = require('prompt-sync')();
let yearimput = require('prompt-sync')();
let valueoneimput = require('prompt-sync')();
let valuetwoimpu = require('prompt-sync')();



//Entrada
console.log("Olá, seja bem vindo a Hut8!");
console.log("Digite seu primeiro nome:");
firstname = nameone();
console.log("Digite o seu sobrenome:");
lastname = nametwo();
console.log("Digite o dia de seu nascimento:");
day = dayimput();
console.log("Digite o mês de seu nascimento:");
month = monthimput();
console.log("Digite o ano de seu nascimento:");
year = yearimput();
console.log("Digite sua primeira nota:");
valueone = valueoneimput();
console.log("Digite sua segunda nota:");
valuetwo = valuetwoimpu();



//Saída
console.log("Nome:" + firstname + " " + lastname);
console.log("Idade: " + (2022 - year));
console.log("Data de nascimento:" + day + "/" + month + "/" + year);
console.log("Média:" + ((valueone + valuetwo) / 2));
