//Uma pessoa desenvolvedora recebe frequentemente propostas de trabalho pela CLT(Consolidação das Leis Trabalhistas) 
//e pela PJ(Pessoa Jurídica). Considerando que o trabalho como CLT envolve férias, 13°salário, 
//R$ 700 de benefício e 8% mensal referente ao FGTS. Faça um programaque receba como entrada os dois valores mensais
// oferecidos e  tome a decisãoinformando qual proposta a pessoa deve aceitar.


//inicio do codigo
const salarioimputclt = require('prompt-sync')();
const salarioimputpj = require('prompt-sync')();



//entrada do valor
console.log("Digite sua proposta de salário CLT: ");
        let salarioclt=Number(salarioimputclt());

console.log("Digite o salário PJ: ");
        let salariopj=Number(salarioimputpj());

        
        
        
//declaracao de variaveis
const beneficiofgts = (salarioclt * 0.08);
const beneficio = (700 + beneficiofgts) ;
const salario13 = (salarioclt * 1.3);
const salariofinal = (salarioclt + salario13 + beneficio );

//processamento e saida

if(salarioclt >= salariopj){
    console.log("A proposta CLT é a melhor proposta");
    console.log("Salário final: " + salariofinal);
}
else{
    console.log("A proposta PJ é a melhor proposta");
    console.log("Salário final:" + salariopj)
}



