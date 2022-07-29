//Uma imobiliária paga às pessoas corretoras de imóveis um salário fixo por mês e
//uma comissão de acordo com o valor de vendas realizado por elas.
//Faça um programa que calcule e imprima no console o valor total recebido pela pessoa
// corretora de imóveis no mês.

const entrada = require('prompt-sync')({sigint: true});
const salario = 5000;
let venda;
venda = entrada ("Digite o valor vendido este mês: ");
let comissao = (venda * 0,1);
let total = (comissao + salario);

console.log("Seu salário mensal é de: " + salario);
console.log("Suas vendas mensais foram de : " + venda);
console.log("Sua salário final do mês sera de: " + total);
return venda;
