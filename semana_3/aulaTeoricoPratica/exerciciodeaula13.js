//Uma loja online que possui a estrutura do objetoabaixo, precisa quealgumas 
//funcionalidades sejam implementadas. Implemente a lista defuncionalidades abaixo.
//
//Lista de Funcionalidades:
//●Filtro por nome, código e categoria;
//●Filtro por faixa de preço;
//●Ordenação em Ordem Crescente e Decrescente por todos os campos






//Entrada dos arrays
var loja = [
    {cod:12345,
    nome: "Notebook",
    estoque: 10,
    valor: 2000,
    categoria:"eletronicos",
},
    {cod:678910,
    nome: "Mouse-Pad",
    estoque: 20,
    valor: 30,
    categoria:"acessorios",
},
    {cod:11121314,
    nome: "Teclado",
    estoque: 12,
    valor: 100,
    categoria:"perifericos",
},
    {cod:15161718,
    nome: "Mouse",
    estoque: 15,
    valor: 90,
    categoria:"perifericos",
},
]



//funçoes 

//Filtro por nome, código e categoria;
function pesquisaNome(loja){
    var nomeimput = require('prompt-sync')();
    console.log("Digite o nome do produto");
    var nome = nomeimput();
    for(var i = 0; i < loja.length; i++){
        if(loja[i].nome == nome){
            console.log(loja[i]);
        }
    }
    return loja;
}

console.log(pesquisaNome(loja));


function pesquisaCod(loja){
    var codimput = require('prompt-sync')();
    console.log("Digite o código do produto");
    var cod = codimput();
    for(var i = 0; i < loja.length; i++){
        if(loja[i].cod == cod){
            console.log(loja[i]);
        }
    }
    return loja;
}

console.log(pesquisaCod(loja));


function pesquisaCategoria(loja){
    var categoriaimput = require('prompt-sync')();
    console.log("Digite a categoria do produto");
    var categoria = categoriaimput();
    for(var i = 0; i < loja.length; i++){
        if(loja[i].categoria == categoria){
            console.log(loja[i]);
        }
    }
    return loja;
}

console.log(pesquisaCategoria(loja));


//Filtro por faixa de preço;

function pesquisaPreco(loja){
    var precoimput = require('prompt-sync')();
    console.log("Digite o preço do produto");
    var preco = precoimput();
    for(var i = 0; i < loja.length; i++){
        if(loja[i].valor <= preco){
            console.log(loja[i]);
        }
    }
    return loja;
}

console.log(pesquisaPreco(loja));

//Ordenação em Ordem Crescente e Decrescente por todos os campos

function ordenaCrescente(loja){
    loja.sort(function(a,b){
        return a.valor - b.valor;
    }
    )
    return loja;
}

console.log(ordenaCrescente(loja));

function ordenaDecrescente(loja){
    loja.sort(function(a,b){
        return b.valor - a.valor;
    }
    )
    return loja;
}

console.log(ordenaDecrescente(loja));





//transação de compra 

function compra(loja){
    const codimput = require('prompt-sync')();
    console.log("Digite o código do produto");
    var cod = codimput();
    for(var i = 0; i < loja.length; i++){
        if(loja[i].cod == cod){
            loja[i].estoque = loja[i].estoque - 1;
            console.log(loja[i]);
        }
    }
    return loja;
}

console.log(compra(loja));

console.log("Você deseja comprar mais algum produto? S/N");
var resposta = prompt();
if(resposta == "S"){
    compra(loja);
}
else{
    console.log("Compra finalizada");
}

const tipoImput = require('prompt-sync')();
console.log("Ok, vamos vinalizar sua compra?");
console.log("Escolha a sua forma de pagamento: \n1-Dinheiro \n2-Cartão \n3-Boleto");
var pagamento = tipoImput();

                if (pagamento == 1){
        console.log("Pagamento efetuado com sucesso");
                }
                
                else if (pagamento == 2){

                const tipocartão = require('prompt-sync')();
                console.log("Você deseja usar cartão de crédito ou débito?");
                console.log("No credito pode parcelar em até 12x");
                
                    if(cartão == credito){
                        const parcelas = require('prompt-sync')();
                        console.log("Digite o número de parcelas");
                        let vezes = parcelas();
                        
                        function numparcelas(loja){
                            for (var i = 0; i < loja.length; i++){
                                var valorDeParcela = loja[i].valor / vezes;
                            }
                        }
                    }

                    else if(cartão == debito){
                        console.log("o valor da sua compra é de R$" + valor*0.15);
                        console.log("Pagamento efetuado com sucesso");
                    }
        }

                else if (pagamento == 3){
                    console.log("O valor final da sua compra é de R$" + valor*0.10);
                    console.log("Pagamento efetuado com sucesso");
                }

