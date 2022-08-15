// Dado o objeto abaixo, faça um programaque imprime no console o 
// nome, cpf e telefone formatados. Dica: Separe o código em funções de 
// formatação para cada um dos campos

const pessoa = [
    {nome: 'Henrique Korges Krause', cpf: '1233456677', telefone: '8328008258'},
    {nome: 'Analu dos santos baptista', cpf: '8789655453', telefone: '35636545454'},
    {nome: 'Lucas Ferreira', cpf: '391289323', telefone: '1231231231'},
]

const formatarCpf = (cpf) => {
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')
}

const formatarTelefone = (telefone) => {
    return telefone.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3')
}

const formatarPessoa = (pessoa) => {
    return `${pessoa.nome} - ${formatarCpf(pessoa.cpf)} - ${formatarTelefone(pessoa.telefone)}`
}

console.log("Pessoas:")
pessoa.forEach(pessoa => console.log(formatarPessoa(pessoa)))
