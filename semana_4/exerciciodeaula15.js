// // O dono de uma livraria resolveu que precisava de novasfuncionalidades no seu sistema de livros e para isso ele contratou umprogramador. Conversando com o programador e entendendo as necessidadesque o dono da livraria precisava, eles chegaram nas seguintes funcionalidades:
// ●Autor do livro mais vendido;
// ●Filtrar livros que tem um preço abaixo do valor que será inserido;
// ●Filtrar livros que tem um preço acima do valor que será inserido;
// ●Pesquisa pelo nome do livro;
// ●Pesquisa pelo autor do livro;
// ●Pesquisa pelo código do livro;
// ●Lista do Estoque;
// ●Top X livros mais vendidos (X será um valor inserido como entrada);
// ●Aumento de X % no preço dos livros (X será um valor inserido comoentrada).Tendo por base as funcionalidades acima e como entrada um um array deobjetos, faça um programa que resolva o problema do dono da livraria

const livros = [
  {
    cod: "8568014003",
    nome: "mais esperto que o diabo",
    autor: "Napoleon Hill",
    valor: 24.6,
    quantidadeVendido: 17675,
  },
  {
    cod: "8550801488",
    nome: "pai rico, pai pobre",
    autor: "Robert T. Kiyosaki",
    valor: 42.71,
    quantidadeVendido: 8992,
  },
  {
    cod: "8547001085",
    nome: "antifragil",
    autor: "Nassim Nicholas Taleb",
    valor: 70.99,
    quantidadeVendido: 1700,
  },
  {
    cod: "8595080801",
    nome: "o investidor inteligente",
    autor: "Benjamin Graham",
    valor: 36.3,
    quantidadeVendido: 8445,
  },
  {
    cod: "8539004119",
    nome: "o poder do hábito",
    autor: "Charles Duhigg",
    valor: 48.9,
    quantidadeVendido: 14581,
  },
  {
    cod: "8543102146",
    nome: "essencialismo",
    autor: "Greg Mckeown",
    valor: 36.43,
    quantidadeVendido: 9730,
  },
  {
    cod: "9788539003839",
    nome: "rápido e devagar",
    autor: "Daniel Kahneman",
    valor: 50.93,
    quantidadeVendido: 5703,
  },
  {
    cod: "8551003429",
    nome: "princípios",
    autor: "Ray Dalio",
    valor: 89.9,
    quantidadeVendido: 3707,
  },
  {
    cod: "855717358X",
    nome: "gestão de alta performance",
    autor: "Andrew S. Grove",
    valor: 34.94,
    quantidadeVendido: 442,
  },
  {
    cod: "8550805246",
    nome: "empresas feitas para vencer",
    autor: "Jim Collins",
    valor: 44.2,
    quantidadeVendido: 824,
  },
  {
    cod: "855080455X",
    nome: "avalie o que importa",
    autor: "John Doerr",
    valor: 40.9,
    quantidadeVendido: 797,
  },
];

//// ●Autor do livro mais vendido;
const autorMaisVendido = livros.reduce((acumulador, livro) => {
  if (acumulador.quantidadeVendido < livro.quantidadeVendido) {
    return livro;
  }
  return acumulador;
});
console.log(autorMaisVendido);

// ●Filtrar livros que tem um preço abaixo do valor que será inserido;
const livrosPrecoAbaixo = livros.filter((livro) => livro.valor < 40);
console.log(livrosPrecoAbaixo);

// ●Filtrar livros que tem um preço acima do valor que será inserido;
const livrosPrecoAcima = livros.filter((livro) => livro.valor > 40);
console.log(livrosPrecoAcima);

// ●Pesquisa pelo nome do livro;
const livroNome = livros.find(
  (livro) => livro.nome === "mais esperto que o diabo"
);
console.log(livroNome);

// ●Pesquisa pelo autor do livro;
const livroAutor = livros.find((livro) => livro.autor === "Napoleon Hill");
console.log(livroAutor);

// ●Pesquisa pelo código do livro;
const livroCod = livros.find((livro) => livro.cod === "8568014003");
console.log(livroCod);

// ●Lista do Estoque;
const livrosEstoque = livros.map((livro) => {
  return {
    cod: livro.cod,
    nome: livro.nome,
    autor: livro.autor,
    valor: livro.valor,
    quantidadeVendido: livro.quantidadeVendido,
  };
});
console.log(livrosEstoque);

// ●Top X livros mais vendidos (X será um valor inserido como entrada);
const topX = livros
  .sort((a, b) => b.quantidadeVendido - a.quantidadeVendido)
  .slice(0, 3);
console.log(topX);

// ●Aumento de X % no preço dos livros (X será um valor inserido comoentrada).Tendo por base as funcionalidades acima e como entrada um um array deobjetos, faça um programa que resolva o problema do dono da livraria
const livrosAumento = livros.map((livro) => {
  return {
    cod: livro.cod,
    nome: livro.nome,
    autor: livro.autor,
    valor: livro.valor * 1.1,
    quantidadeVendido: livro.quantidadeVendido,
  };
});
console.log(livrosAumento);
