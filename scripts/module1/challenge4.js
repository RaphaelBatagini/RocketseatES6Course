// Desafio 4

/* 
 * Utilize a desestruturação para transformar as propriedades nome, cidade e 
 * estado em variáveis, no fim deve ser possível fazer o seguinte:
 */

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