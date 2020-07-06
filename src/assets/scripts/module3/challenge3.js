// Transforme o seguinte trecho de código utilizando async/await:

/*
 * class Github {
 *  static getRepositories(repo) {
 *  axios.get(`https://api.github.com/repos/${repo}`)
 *  .then(response => {
 *  console.log(response.data);
 *  })
 *  .catch(err => {
 *  console.log('Repositório não existe');
 *  })
 *  }
 * }
 * Github.getRepositories('rocketseat/rocketseat.com.br');
 * Github.getRepositories('rocketseat/dslkvmskv');
 */

import axios from 'axios';

class Github {
    static async getRepositories(repo) {
        try {
            let response = await axios.get(`https://api.github.com/repos/${repo}`);
            console.log(response);
        } catch(err) {
            console.log('Repositório não existe');
        }
    }
}

Github.getRepositories('RaphaelBatagini/RocketseatES6Course');
Github.getRepositories('RaphaelBatagini/dslkvmskv');