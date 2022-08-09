//Em uma empresa de tecnologia a área de RecursosHumanos precisavaorganizar algumas 
//informações a respeito dos funcionários. Para que isso fossepossível, ele precisava criar um programa que entregasse 
//lista defuncionalidades abaixo.Tendo como entrada um array de objetos crie funções que realizam as seguintesoperações:
//●Ordena o Array em ordem crescente por idade;
//●Ordena o Array em ordem decrescente por idade;
//●Ordena o Array em ordem crescente por salário;
//●Ordena o Array em ordem decrescente por salário;
//●Ordena o Array em ordem crescente por senioridade;
//●Ordena o Array em ordem decrescente por senioridade;



//array dos funcionarios
const funcionarios = [  { nome:"João", idade: 30, salario: 15000, senioridade:"senior" },

                        { nome:"Pedro", idade: 22, salario: 10000, senioridade:"pleno" },

                        { nome:"Carla", idade: 27, salario: 1500, senioridade:"estagio" },

                        { nome:"Lucas", idade: 35, salario: 15000, senioridade:"senior" },

                        { nome:"Roberta", idade: 45, salario: 5000, senioridade:"junior" },

                        { nome:"Patrícia", idade: 19, salario: 10000, senioridade:"pleno" },

                        { nome:"Joana", idade: 23, salario: 5000, senioridade:"junior" }
                    ];

//ordenar por idade
console.log("\n ordenar por idade crescente");

function ordenarPorIdade(funcionarios) {
    funcionarios.sort(function (a, b) {
        return a.idade - b.idade;
    }
    );
    return funcionarios;
}
console.log(ordenarPorIdade(funcionarios));


//ordenar por idade decrescente 
console.log("\n Ordenar por idade decrescente");

function ordenarPorIdadeDecrescente(funcionarios) {
    funcionarios.sort(function (a, b) {
        return b.idade - a.idade;
    }
    );
    return funcionarios;
}
console.log(ordenarPorIdadeDecrescente(funcionarios));


//ordenar por salario Crescente
console.log("\n Ordenar por salario Crescente");

function ordenarporSalarios(funcionarios) {
    funcionarios.sort(function (a, b) {
        return a.salario - b.salario;
    }
    );
    return funcionarios;
}
console.log(ordenarporSalarios(funcionarios));


//ordenar por salario decrescente
console.log("\n Ordenar por salario decrescente");

function ordenarporSalarioDecrescente(funcionarios) {
    funcionarios.sort(function (a, b) {
        return b.salario - a.salario;
    }
    );
    return funcionarios;
}

console.log(ordenarporSalarioDecrescente(funcionarios));


//ordenar senoiridade crescente
console.log("\n Ordenar por senioridade crescente");

function ordenarPorSenioridade(funcionarios) {
    funcionarios.sort(function (a, b) {
        return a.senioridade - b.senioridade;
    }
    );
    return funcionarios;
}
console.log(ordenarPorSenioridade(funcionarios));


//ordenar por senioridade decrescente
console.log("\n Ordenar por senioridade decrescente");

function ordenarPorSenioridadeDecrescente(funcionarios) {
    funcionarios.sort(function (a, b) {
        return b.senioridade - a.senioridade;
    }
    );
    return funcionarios;
}
console.log(ordenarPorSenioridadeDecrescente(funcionarios));




