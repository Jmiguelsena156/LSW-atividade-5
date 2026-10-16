// Questão 1

const atualizar_carga = (disciplina, carga) => {
    disciplina.cargaHoraria += carga;
    disciplina.periodo = 2;
    delete disciplina.professor;
    return disciplina;
}

const disciplina = {
    nome: "Web",
    cargaHoraria: 60,
    professor: "John"
}

atualizar_carga(disciplina, 20);

console.log(disciplina);

// Questão 2

const funcionarios = [
    {nome: "Lia", setor: "TI"},
    {nome: "Rui", setor: "RH"},
    {nome: "Ana", setor: "TI"},
    {nome: "Caio", setor: "Vendas"},
];

console.log(funcionarios.filter(func => func.setor === "TI").map(func => func.nome));
console.log(funcionarios.length);

// Questão 3

const carrinho = [
    {item: "Teclado", preco: 150, quantidade: 1},
    {item: "Mouse", preco: 80, quantidade: 2},
    {item: "Cabo USB", preco: 25, quantidade: 3}
]

console.log(`Total da compra: R$ ${carrinho.reduce((soma, produto) => soma += produto.preco * produto.quantidade, 0)}`)

// Questão 4

const alunos = [
   { nome: "Ana", media: 8.5 },
   { nome: "Bruno", media: 6 },
   { nome: "Carla", media: 9 },
   { nome: "Davi", media: 5.5 }
]

console.log(alunos.find(aluno => aluno.media < 7.0).nome);
console.log(alunos.some(aluno => aluno.media >= 9));
console.log(alunos.every(aluno => aluno.media >= 7));

// Questão 5

const recebido = '{"produto":"Monitor", "preco":900, "estoque":4}'

const produto = JSON.parse(recebido);

produto.preco *= (1 - 0.1);

produto.estoque--;

console.log(typeof(produto));
console.log(produto);
console.log(typeof(recebido));

// Questão 6

const gerarUsuario = (nomeCompleto) => nomeCompleto.trim().toLowerCase().split(" ").join(".");

console.log(gerarUsuario("  Maria Claro Souza  "));
console.log(gerarUsuario("JOAO LIMA"));

// Questão 7

const dobrar = num => num * 2;
const somar = (num1, num2) => num1+num2;
const saudar = () => "Bem-vindo ao ADS!";

console.log(dobrar(7));
console.log(somar(4, 6));
console.log(saudar());

// Questão 8

const soma = (num1, num2) => num1+num2;
const subtracao = (num1, num2) => num1-num2;
const multiplicacao = (num1, num2) => num1*num2;

function aplicarOperacao(a, b, operacao) {
    return operacao(a, b);
}

console.log(aplicarOperacao(8, 2, soma));
console.log(aplicarOperacao(8, 2, multiplicacao));
console.log(aplicarOperacao(8, 2, subtracao));

// Questão 9

function criarMultiplicador(fator) {

    return (valor) => {
        return valor * fator;
    }
}

const dobrar2 = criarMultiplicador(2);
const triplicar2 = criarMultiplicador(3);

console.log(dobrar2(5));
console.log(triplicar2(5));
console.log(dobrar2(10));

// Questão 10


const alunos_A = [
    {nome: "ana" ,media: 8.5},
    {nome: "bruno" ,media: 6},
    {nome: "carla" ,media: 7.5},
    {nome: "davi" ,media: 9}
]

const listarAprovados = (lista, MediaMinima = 7) => {
    return lista.filter(aluno => aluno.media >= MediaMinima).map(aluno => aluno.nome.toUpperCase());
}

console.log(listarAprovados(alunos_A));
console.log(listarAprovados(alunos_A, 8));