//Dado a lista de compras a seguir,faça um programa queimprime no console o valor total. 
//Atenção, o valor de cada item é unitário.

//declarando um array
const array = [
    { nome: "Arroz", quantidade: 1, preço: 10 },
    { nome: "Feijão", quantidade: 1, preço: 6 },
    { nome: "Macarrão", quantidade: 1, preço: 8 },
    { nome: "Batata", quantidade: 1, preço: 5 },
    { nome: "Alface", quantidade: 1, preço: 1.5 },
    { nome: "Tomate", quantidade: 1, preço: 2 },
]

//função que retorna o valor total
function valorTotal(array) {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
        total += array[i].quantidade * array[i].preço;
    }
    return total;
}

console.log("O valor total de sua compra é de:" , "$" + (valorTotal(array)));
