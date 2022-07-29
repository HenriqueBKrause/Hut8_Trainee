//Elabore um algoritmo que calcule o que deve ser pago por um produto,
//considerando o preço normal de etiqueta e a escolha da condição de pagamento.
//Utilize os códigos da tabela a seguir para ler qual a condição de pagamento 
//escolhida e efetuar o cálculo adequado, imprimindo o valor final no console.
//Código Condição de pagamento :
//1 - À vista em dinheiro ou cheque, recebe 10% de desconto
//2 - À vista no cartão de crédito, recebe 15% de desconto
//3 - Em duas vezes, preço normal de etiqueta sem juros
//4 - Em três vezes, preço normal de etiqueta mais juros de 10%



//entrada de dados
const valorimput = require('prompt-sync')();
const condicao = require('prompt-sync')();
console.log("Olá sejabem vindo Hut8, a loja que tem tudo para você!");
console.log("Qual o valor do produto que deseja?");
valor = valorimput();

//Menu de opções
console.log("As opções de pagamento são: \n1 - À vista em dinheiro ou cheque, recebe 10% de desconto; ");
console.log("2 - À vista no cartão de crédito, recebe 15% de desconto ;");
console.log("3 - Em duas vezes, preço normal de etiqueta sem juros;");
console.log("4 - Em três vezes, preço normal de etiqueta mais juros de 10%;");

//processamento de dados
console.log("Qual a condição de pagamento?");
pagamento = condicao();


//saida de dados
switch (pagamento) {
    case "1": 
        console.log(valor);
        console.log("O valor do produto à vista é: " + (+valor - (+valor * 0.1)));
        break;
    case "2":
        console.log("O valor do produto no cartão é: " + (valor - (valor * 0.15)));  
        break;
    case "3":
        console.log("O valor do produto parcelado em 2 vezes é: " + valor);
        break;
    case "4":
        console.log("O valor do produto parcelado em 3 é: " + (valor + (valor * 0.1)));
        break;
    default:
        console.log("Condição de pagamento inválida");
}
console.log("Obrigado por comprar na nossa loja a Hut8 agradece!");
