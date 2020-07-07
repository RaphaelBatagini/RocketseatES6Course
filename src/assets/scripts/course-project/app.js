class App {
    constructor() {
        this.repositories = [];

        this.elements = {
            form: document.getElementById('repo-form'),
            list: document.getElementById('repo-list')
        }

        this.registerHandlers();
    }

    registerHandlers() {
        this.elements.form.onsubmit = event => this.addRepositories(event);
    }

    addRepositories(event) {
        event.preventDefault();

        this.repositories.push({
            name: 'Test',
            description: 'Test Description',
            avatar_url: 'https://avatars1.githubusercontent.com/u/9126880?v=4',
            html_url: 'https://github.com/RaphaelBatagini/RocketseatES6Course',
        });

        this.render();
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