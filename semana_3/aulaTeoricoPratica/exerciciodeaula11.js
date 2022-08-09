//O dono de uma livraria resolveu que precisavade novas funcionalidades noseu sistema de 
//livros e para isso ele contratou um programador. Conversandocom o programador e entendendo 
//as necessidades que o dono da livrariaprecisava, eles chegaram nas seguintes funcionalidades:
//●Autor do livro mais vendido;
//●Filtrar livros que tem um preço abaixo do valor que será inserido;
//●Filtrar livros que tem um preço acima do valor que será inserido;
//●Pesquisa pelo nome do livro;
//●Pesquisa pelo autor do livro;
//●Pesquisa pelo código do livro;
//●Lista do Estoque;


//array de produtos 
const produtos = [
    { cod: "8568014003", 
    nome: "mais esperto que o diabo", 
    autor: "Napoleon Hill",
    valor: 24.6,
    quantidadeVendido: 17675
},
    {cod: "8550801488",
    nome: "pai rico, pai pobre",
    autor: "Robert T. Kiyosaki",
    valor: 42.71,
    quantidadeVendido: 8992,
},
    { cod: "8547001085",
    nome: "antifragil",
    autor: "Nassim Nicholas Taleb",
    valor: 70.99,
    quantidadeVendido: 1700,
},
    {cod: "8595080801",
    nome: "o investidor inteligente",
    autor: "Benjamin Graham",
    valor: 36.3,
    quantidadeVendido: 8445,
},
    { cod: "8539004119",
    nome: "o poder do hábito",
    autor: "Charles Duhigg",
    valor: 48.9,
    quantidadeVendido: 14581, 
},
    { cod: "8543102146",
    nome: "essencialismo",
    autor: "Greg Mckeown",
    valor: 36.43,
    quantidadeVendido: 9730, 
},
    { cod: "9788539003839",
    nome: "rápido e devagar",
    autor: "Daniel Kahneman",
    valor: 50.93,
    quantidadeVendido: 5703, 
},
    { cod: "8551003429",
    nome: "princípios",
    autor: "Ray Dalio",
    valor: 89.9,
    quantidadeVendido: 3707, 
},
    { cod: "855717358X",
    nome: "gestão de alta performance",
    autor: "Andrew S. Grove",
    valor: 34.94,
    quantidadeVendido: 442, 
},
    { cod: "8550805246",
    nome: "empresas feitas para vencer",
    autor: "Jim Collins",
    valor: 44.2,
    quantidadeVendido: 824, 
},
    { cod: "855080455X",
    nome: "avalie o que importa",
    autor: "John Doerr",
    valor: 40.9,
    quantidadeVendido: 797, 
}
    ];

//fuções
////●Autor do livro mais vendido;

function autorMaisVendido(produtos){
    let autorMaisVendido = " ";
    let maiorQuantidadeVendido = 0;
    for(let i = 0; i < produtos.length; i++){
        if(produtos[i].quantidadeVendido > maiorQuantidadeVendido){
            maiorQuantidadeVendido = produtos[i].quantidadeVendido;
            autorMaisVendido = produtos[i].autor;
        }
    }
        return autorMaisVendido;
}

console.log("O autor mais vendido é:");
console.log(autorMaisVendido(produtos));

//Filtrar livros que tem um preço abaixo do valor que será inserido

function filtrarPrecoAbaixo(produtos, preco){
    let livrosPrecoAbaixo = [];
    for(let i = 0; i<produtos.length; i++){
        if(produtos[i].valor < preco){
            livrosPrecoAbaixo.push(produtos[i]);
        }
    }
    return livrosPrecoAbaixo;
}

console.log("Os livros que tem um preço abaixo do valor inserido são:");
console.log(filtrarPrecoAbaixo(produtos, 40));


//Filtrar livros que tem um preço acima do valor que será inserido;

function filtrarPrecoAcima(produtos, preco){
    let livrosPrecoAcima = [];
    for(let i = 0; i<produtos.length; i++){
        if(produtos[i].valor > preco){
            livrosPrecoAcima.push(produtos[i]);
        }
    }
    return livrosPrecoAcima;

}

console.log("Os livros que tem um preço acima do valor inserido são:");
console.log(filtrarPrecoAcima(produtos, 40));


//Pesquisa pelo nome do livro;

function pesquisaNome(produtos, nome){
    let livroNome = [];
    for(let i = 0; i<produtos.length; i++){
        if(produtos[i].nome == nome){
            livroNome.push(produtos[i]);
        }
    }
    return livroNome;
}

console.log("Os livros que tem o nome inserido são:");
console.log(pesquisaNome(produtos));



//Pesquisa pelo autor do livro;

function pesquisaAutor(produtos, autor){
    let livroAutor = [];
    for(let i = 0; i<produtos.length; i++){
        if(produtos[i].autor == autor){
            livroAutor.push(produtos[i]);
        }
    }
    return livroAutor;
}

console.log("Os livros que tem o autor inserido são:"); 
console.log(pesquisaAutor(produtos));

//Pesquisa pelo código do livro;

function pesquisaCodigo(produtos, codigo){
    let livroCodigo = [];
    for(let i = 0; i<produtos.length; i++){
        if(produtos[i].cod == codigo){
            livroCodigo.push(produtos[i]);
        }
    }
    return livroCodigo;
}

console.log("Os livros que tem o código inserido são:");
console.log(pesquisaCodigo(produtos));



//Lista do Estoque;

function listaEstoque(produtos){
    let listaEstoque = [];
    for(let i = 0; i<produtos.length; i++){
        listaEstoque.push(produtos[i]);
    }
    return listaEstoque;
}

console.log("Os livros que estão no estoque são:");
console.log(listaEstoque(produtos));













