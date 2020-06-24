class List {
    constructor() {
        this.data = [];
    }

    add(data) {
        this.data.push(data);
        console.log(this.data);
    }
}

class TodoList extends List {

}

const MinhaLista = new TodoList();

document.getElementById('newTodo').onclick = function () {
    MinhaLista.add('Novo item');
}

// =============================

// Desafio 1

class User {
    constructor(email, password) {
        this.user = {
            email,
            password
        }

        this.admin = false;
    }

    isAdmin() {
        return this.admin === true;
    }
}

class Admin extends User {
    constructor(email, password) {
        super(email, password);

        this.admin = true;
    }
}

const user = new User('user@teste.com', 'abcdef');
const admin = new Admin('admin@teste.com', '123456');

console.log(user, user.isAdmin());
console.log(admin, admin.isAdmin());

// Desafio 2

const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

// Retorna idade dos usuarios
let idades = usuarios.map(usuario => usuario.idade);

// Retorna usuarios que trabalham na Rocketseat com idade maior ou igual a 18 anos
let filtered = usuarios.filter(
    usuario => usuario.empresa == 'Rocketseat' && usuario.idade >= 18
);

// Retorna UM usuários que trabalha no Facebook
let facebookUser = usuarios.find(usuario => usuario.empresa == 'Facebook');

// Retorna todos os usuarios com idade dobrada e inferior a 50 anos
let filteredDoubleAged = usuarios.map((usuario) => {
    usuario.idade *= 2;
    return usuario;
}).filter(usuario => usuario.idade <= 50);

console.log(idades);
console.log(filtered);
console.log(facebookUser);
console.log(filteredDoubleAged);

// =============================

// Convertendo exemplos para arrow function

// const arr = [1, 2, 3, 4, 5];
// arr.map(function(item) {
//    return item + 10;
// });

const arr = [1, 2, 3, 4, 5];
arr.map(item => item + 10);

// const usuario = { nome: 'Diego', idade: 23 };
// function mostraIdade(usuario) {
//     return usuario.idade;
// }
// mostraIdade(usuario);

const usuario = { nome: 'Diego', idade: 23 };
const mostraIdade = (usuario => usuario.idade);
mostraIdade(usuario);

// const nome = "Diego";
// const idade = 23;
// function mostraUsuario(nome = 'Diego', idade = 18) {
//     return { nome, idade };
// }
// mostraUsuario(nome, idade);
// mostraUsuario(nome);

const nome = "Diego";
const idade = 23;
const mostraUsuario = (nome = 'Diego', idade = 18) => ({ nome, idade });
mostraUsuario(nome, idade);
mostraUsuario(nome);

// const promise = function () {
//     return new Promise(function (resolve, reject) {
//         return resolve();
//     })
// }

const promise = () => (new Promise((resolve, reject) => resolve()));

// Desestruturação

const empresa = {
    nome: 'Rocketseat',
    endereco: {
        cidade: 'Rio do Sul',
        estado: 'SC',
    }
};

const { nome, endereco: { cidade, estado } } = empresa;

console.log(nome);
console.log(cidade);
console.log(estado);