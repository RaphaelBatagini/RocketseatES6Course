// Desafio 5

/*
 * Utilizando o operador de rest/spread (...) realize as seguintes operações:
 */

/* REST */

/*
 * A partir do array: const arr = [1, 2, 3, 4, 5, 6], defina uma variável x que recebe a primeira
 * posição do vetor e outra variável y que recebe todo restante dos dados.
 * console.log(x); // 1
 * console.log(y); // [2, 3, 4, 5, 6]
 */

const arr = [1, 2, 3, 4, 5, 6];
const [x, ...y] = arr;
console.log(x);
console.log(y);

/*
 * Crie uma função que recebe inúmeros parâmetros e retorna a soma de todos eles:
 * console.log(soma(1, 2, 3, 4, 5, 6)); // 21
 * console.log(soma(1, 2)); // 3
 */

function sum(...numbers) {
    return numbers.reduce((total, number) => {
        return total + number;
    });
}
console.log(sum(1, 2, 3, 4, 5, 6));
console.log(sum(1, 2));

/* SPREAD */

/*
 * A partir do objeto e utilizando o operador spread:
 * const usuario = {
 *     nome: 'Diego',
 *     idade: 23,
 *     endereco: {
 *         cidade: 'Rio do Sul',
 *         uf: 'SC',
 *         pais: 'Brasil',
 *     }
 * };
 * Crie uma variável usuario2 que contenha todos os dados do usuário porém com nome Gabriel.
 * Crie uma variável usuario3 que contenha todos os dados do usuário porém com cidade Lontras.
 */

const usuario = {
    nome: 'Diego',
    idade: 23,
    endereco: {
        cidade: 'Rio do Sul',
        uf: 'SC',
        pais: 'Brasil',
    }
};

const usuario2 = { ...usuario, nome: 'Gabriel'};
const usuario3 = { ...usuario, endereco: { ...usuario.endereco, cidade: 'Lontras' } };
console.log(usuario2);
console.log(usuario3);


