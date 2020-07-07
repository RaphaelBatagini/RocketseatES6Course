import api from './api';

class App {
    constructor() {
        this.repositories = [];

        this.elements = {
            form: document.getElementById('repo-form'),
            input: document.querySelector('input[name="repository"]'),
            list: document.getElementById('repo-list')
        }

        this.registerHandlers();
    }

    registerHandlers() {
        this.elements.form.onsubmit = event => this.addRepositories(event);
    }

    setLoading(loading = true) {
        if (loading === true) {
            let loadingElement = document.createElement('span');
            loadingElement.setAttribute('id', 'loading');
            loadingElement.appendChild(document.createTextNode('Carregando...'));

            this.elements.form.appendChild(loadingElement);
        } else {
            document.getElementById('loading').remove();
        }
    }

    async addRepositories(event) {
        event.preventDefault();

        let repository = this.elements.input.value;

        if (repository.length === 0)
            return;

        this.setLoading();

        try {
            const response = await api.get(`/repos/${repository}`);

            const { name, description, html_url, owner: { avatar_url } } = response.data;

            this.repositories.push({
                name,
                description,
                avatar_url,
                html_url,
            });

            this.elements.input.value = '';

            this.render();
        } catch (error) {
            alert('O repositório não existe');
        }

        this.setLoading(false);
    }

    render() {
        this.elements.list.innerHTML = '';

        this.repositories.forEach((repository) => {
            let imageElement = document.createElement('img');
            imageElement.setAttribute('src', repository.avatar_url);
            
            let titleElement = document.createElement('strong');
            titleElement.appendChild(document.createTextNode(repository.name));

            let descriptionElement = document.createElement('p');
            descriptionElement.appendChild(document.createTextNode(repository.description));

            let linkElement = document.createElement('a');
            linkElement.setAttribute('target', '_blank');
            linkElement.setAttribute('href', repository.html_url);
            linkElement.appendChild(document.createTextNode('Acessar'));

            let listElement = document.createElement('li');
            listElement.appendChild(imageElement);
            listElement.appendChild(titleElement);
            listElement.appendChild(descriptionElement);
            listElement.appendChild(linkElement);

            this.elements.list.appendChild(listElement);
        });
    }
}

new App();