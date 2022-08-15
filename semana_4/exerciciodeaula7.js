//Dado um array de entrada com o nome e as notas de avaliações dos alunos,
//retorne uma lista com os alunos que tiraram 0 em todas as provas.

const alunos = [
    {
        nome:"Henrique" ,notas: [9],
    },
    {
        nome:"Lucas" ,notas: [9],
    },
    {
        nome:"Baitaca" ,notas: [0],
    },
    {
        nome: "Gabriel Toledo" ,notas: [9],
    },
    {
        nome:"Mano lima" ,notas: [0],
    },
]
 
const alunosZero = alunos.filter(aluno => aluno.notas.every(nota => nota === 0))
console.log(alunosZero);


