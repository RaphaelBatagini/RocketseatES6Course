// Desafio 3

// Converta as funções nos seguintes trechos de código em Arrow Functions:

/*
 * const arr = [1, 2, 3, 4, 5];
 * arr.map(function(item) {
 *    return item + 10;
 * });
 */
const arr = [1, 2, 3, 4, 5];
arr.map(item => item + 10);

/*
 * const usuario = { nome: 'Diego', idade: 23 };
 * function mostraIdade(usuario) {
 *     return usuario.idade;
 * }
 * mostraIdade(usuario);
 */

const usuario = { nome: 'Diego', idade: 23 };
const mostraIdade = (usuario => usuario.idade);
mostraIdade(usuario);

/*
 * const nome = "Diego";
 * const idade = 23;
 * function mostraUsuario(nome = 'Diego', idade = 18) {
 *     return { nome, idade };
 * }
 * mostraUsuario(nome, idade);
 * mostraUsuario(nome);
 */

const nome = "Diego";
const idade = 23;
const mostraUsuario = (nome = 'Diego', idade = 18) => ({ nome, idade });
mostraUsuario(nome, idade);
mostraUsuario(nome);

/*
 * const promise = function () {
 *     return new Promise(function (resolve, reject) {
 *         return resolve();
 *     })
 * }
 */

const promise = () => (new Promise((resolve, reject) => resolve()));
