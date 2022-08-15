//Troque todas as vírgulas na string abaixo por ponto final:
//a.“Olá, mundo, meu, nome, é, Juca”


//Declarando string
let frase = "Olá, mundo, meu, nome, é, Juca";

//separando as palavras
let fraseArray = frase.split(",");
let fraseFinal = "";

//Fazendo a troca de vírgula por ponto final
for(let i = 0; i < fraseArray.length; i++)  {
        
            if(i == fraseArray.length - 1)
        {
            fraseFinal += fraseArray[i];
        }
        else
        {
            fraseFinal += fraseArray[i] + ".";
        }
}


//impriminado a frase sem as virugulas:

let frasetwo = "Olá, mundo, meu, nome, é, Juca";
let frasetwoArray = frasetwo.split(",");
let frasetwoFinal = "";


for(let i = 0; i < frasetwoArray.length; i++)  {
            
                if(i == frasetwoArray.length - 1)
            {
                frasetwoFinal += frasetwoArray[i];
            }
            else
            {
                frasetwoFinal += frasetwoArray[i] + " ";
            }
    }


//Interação com o usuário
const optionimput = require('prompt-sync')();

console.log("Você deseja imprimir a frase original, sem virgulas ou substituindo pro pontos finais?");
let option = optionimput("");

if(option == "original" || option == "frase original")
{
    console.log(frase);
}
else if(option == "sem virgulas" || option == "sem")
{
    console.log(frasetwoFinal);
}
else if(option == "substituindo" || option == "pontos" || option == "ponto finais")
{
    console.log(fraseFinal);
}
