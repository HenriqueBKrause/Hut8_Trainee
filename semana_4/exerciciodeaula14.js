// Uma empresa gostaria de organizar seu quadro de funcionários, para issocontratou o estagiário Juquinha para criar um software.
// O CEO da empresa fezuma lista de pedidos para o Juquinha
// Pedidos:
// ●A - Função para retornar apenas o funcionário com o id informado:
// ●B - Função para filtrar apenas os funcionários ativos na empresa:
// ●C - Função para filtrar apenas funcionários clt
// ●D - Função para criar uma nova estrutura onde cada funcionário receberá uma nova informação de base salarial
// ●E - Função onde separa em 2 grupos os funcionários pj e clt
// ●F - Função que retorna apenas funcionários ativos ordenados por ordem de idade

const funcionarios = [
  {
    id: 1,
    name: "Carlos",
    age: 35,
    active: false,
    birth_date: "13/05/1986",
    contract_date: "20/07/2015",
    job: "front-end",
    type: "clt",
  },

  {
    id: 2,
    name: "Matheus",
    age: 30,
    active: true,
    birth_date: "03/07/1991",
    contract_date: "01/03/2020",
    job: "front-end",
    type: "clt",
  },
  {
    id: 3,
    name: "Pamela",
    age: 23,
    active: true,
    birth_date: "20/09/1998",
    contract_date: "19/06/2021",
    job: "back-end",
    type: "pj",
  },
  {
    id: 4,
    name: "Fabiana",
    age: 32,
    active: false,
    birth_date: "08/12/1989",
    contract_date: "13/04/2018",
    job: "front-end",
    type: "pj",
  },
  {
    id: 5,
    name: "João",
    age: 37,
    active: true,
    birth_date: "08/12/1984",
    contract_date: "03/08/2014",
    job: "front-end",
    type: "clt",
  },
  {
    id: 6,
    name: "Miguel",
    age: 29,
    active: true,
    birth_date: "08/12/1992",
    contract_date: "26/02/2015",
    job: "fullstack",
    type: "clt",
  },
  {
    id: 7,
    name: "Francine",
    age: 27,
    active: false,
    birth_date: "27/01/1994",
    contract_date: "23/05/2019",
    job: "designer",
    type: "pj",
  },
  {
    id: 8,
    name: "Matheus",
    age: 31,
    active: true,
    birth_date: "10/11/1990",
    contract_date: "18/09/2017",
    job: "marketing",
    type: "clt",
  },
  {
    id: 9,
    name: "Gabriel",
    age: 28,
    active: true,
    birth_date: "08/12/1993",
    contract_date: "14/11/2020",
    job: "financeiro",
    type: "clt",
  },
];

console.log(
  " 1-Por id; \n 2-Atividade; \n 3-clt; \n 4-Salario; \n 5-Grupos; \n 6-Ordenados"
);

// ●A - Função para retornar apenas o funcionário com o id informado:
function funcionarioPorId(id) {
  for (let i = 0; i < funcionarios.length; i++) {
    if (funcionarios[i].id == id) {
      return funcionarios[i];
    }
  }
}
console.log(funcionarioPorId(2));

// ●B - Função para filtrar apenas os funcionários ativos na empresa:

const funcionariosativos = funcionarios.filter((funcionario) => {
  return funcionario.active == true;
});
console.log(funcionariosativos);

// ●C - Função para filtrar apenas funcionários clt
const funcionatioclt = funcionarios.filter((funcionario) => {
  return funcionario.type == "clt";
});
console.log(funcionatioclt);

// ●D - Função para criar uma nova estrutura onde cada funcionário receberá uma nova informação de base salarial
const funcionariosnovosalario = funcionarios.map((funcionario) => {
  return {
    ...funcionario,
    salary: funcionario.type == "clt" ? 1000 : 1500,
  };
});
console.log(funcionariosnovosalario);

// ●E - Função onde separa em 2 grupos os funcionários pj e clt
const funcionariospj = funcionarios.filter((funcionario) => {
  return funcionario.type == "pj";
});
console.log(funcionariospj);

const funcionariosclt = funcionarios.filter((funcionario) => {
  return funcionario.type == "clt";
});
console.log(funcionariosclt);

// ●F - Função que retorna apenas funcionários ativos ordenados por ordem de idade

const funcionariosativosordenados = funcionarios
  .filter((funcionario) => {
    return funcionario.active == true;
  })
  .sort((a, b) => {
    return a.age - b.age;
  });
console.log(funcionariosativosordenados);

//eleção de qual função deja buscar
const functionselectimput = require("prompt-sync")();

console.log("Como deseja fazer a busca:");

let functionselect = functionselectimput("");

if (functionselect == 1) {
  for (i = 0; i < funcionarios.length; i++) {
    if (funcionarioPorId[i].id == id) {
      console.log(funcionarioPorId[i]);
    }
  }
} else if (functionselect == 2) {
  for (i = 0; i < funcionarios.length; i++) {
    if (funcionariosativos[i].active == true) {
      console.log(funcionariosativos[i]);
    }
  }
} else if (functionselect == 3) {
  for (i = 0; i < funcionarios.length; i++) {
    if (funcionatioclt[i].type == "clt") {
      console.log(funcionatioclt[i]);
    }
  }
} else if (functionselect == 4) {
  for (i = 0; i < funcionarios.length; i++) {
    if (funcionariosnovosalario[i].salary == 1000) {
      console.log(funcionariosnovosalario[i]);
    }
  }
} else if (functionselect == 5) {
  for (i = 0; i < funcionarios.length; i++) {
    if (funcionariospj[i].type == "clt") {
      console.log(funcionariospj[i]);
    }
  }
} else if (functionselect == 5) {
  for (i = 0; i < funcionarios.length; i++) {
    if (funcionariosclt[i].type == "pj") {
      console.log(funcionariosclt[i]);
    }
  }
} else if (functionselect == 6) {
  for (i = 0; i < funcionarios.length; i++) {
    if (funcionariosativosordenados[i].active == true) {
      console.log(funcionariosativosordenados[i]);
    }
  }
}
