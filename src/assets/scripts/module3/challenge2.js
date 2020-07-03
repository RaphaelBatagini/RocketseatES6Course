// Transforme o seguinte trecho de código utilizando async/await:

/*
 * import axios from 'axios';
 * function getUserFromGithub(user) {
 *     axios.get(`https://api.github.com/users/${user}`)
 *         .then(response => {
 *             console.log(response.data);
 *         })
 *         .catch(err => {
 *             console.log('Usuário não existe');
 *         })
 * }
 * getUserFromGithub('diego3g');
 * getUserFromGithub('diego3g124123');
 */

import axios from 'axios';

async function getUserFromGitHub(user) {
    try {
        const response = await axios.get(
            `https://api.github.com/users/${user}`
        );

        console.log(response);
    } catch (err) {
        console.warn('Erro na API: ' + err);
    }
}

getUserFromGitHub('RaphaelBatagini');
getUserFromGitHub('RaphaelBatagini123');