// Desafio 2

// A partir do seguinte vetor e utilizando os métodos de array (map, reduce, filter e find):

const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

// Utilizando o map - Crie uma variável que contenha todas idades dos usuários: [23, 15, 30]
let idades = usuarios.map(usuario => usuario.idade);

// Utilizando o filter
// Crie uma variáveis que tenha apenas os usuários que trabalham na Rocketseat 
// e com mais de 18 anos: [{ nome: 'Diego', idade: 23, empresa: 'Rocketseat' }]
let filtered = usuarios.filter(
    usuario => usuario.empresa == 'Rocketseat' && usuario.idade >= 18
);

// Utilizando o find - Crie uma variável que procura por um usuário que trabalhe na empresa Google: undefined
let facebookUser = usuarios.find(usuario => usuario.empresa == 'Google');

// Unindo operações
/*
 * Multiplique a idade de todos usuários por dois e depois realize um filtro nos usuários que possuem
 * no máximo 50 anos:
 * Resultado:
 * [
 *     { nome: 'Diego', idade: 46, empresa: 'Rocketseat' },
 *     { nome: 'Gabriel', idade: 30, empresa: 'Rocketseat' },
 * ]
 */
let filteredDoubleAged = usuarios.map((usuario) => {
    usuario.idade *= 2;
    return usuario;
}).filter(usuario => usuario.idade <= 50);

console.log(idades);
console.log(filtered);
console.log(facebookUser);
console.log(filteredDoubleAged);