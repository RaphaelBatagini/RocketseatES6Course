// Desafio 1

/*
 * Para testar seus conhecimentos com classes, crie uma classe com nome "Admin", essa classe deve
 * extender uma segunda classe chamada "Usuario".
 * A classe usuário deve receber dois parâmetros no método construtor, e-mail e senha, e anotá-los
 * em propriedades da classe. A classe "Admin" por sua vez não recebe parâmetros mas deve
 * repassar os parâmetros de e-mail e senha à classe pai e marcar uma propriedade "admin" como
 * true na classe.
 * Agora com suas classes formatadas, adicione um método na classe Usuario chamado isAdmin que
 * retorna se o usuário é administrador ou não baseado na propriedade admin ser true ou não.
 */

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