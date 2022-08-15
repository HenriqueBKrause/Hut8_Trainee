//Crie um algoritmo que tem comoentrada um array destrings e trata essas string 
//substituindo os números por letra de acordo com atabela a seguir, além disso, 
//deve remover os espaços em branco no começo efim da string, se existirem

//tabela de conversão
const table = {
     0: 'o', 1: 'i', 3: 'b', 4: 'a', 5: 's'
}

const entrada = ['  h3ll0 w0rld', '  w3b d3v3l0p3r  ', '0tterw1s3', 'j4v4scr1pt ']

const saida = entrada.map(value => {
        return value.split('').map(value => {
            if(table[value]){
                return table[value]
            }else{
                return value
            }
        }).join('').trim()
}).join('\n')





console.log(saida)
