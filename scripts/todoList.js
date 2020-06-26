class List {
    constructor() {
        this.data = [];
    }

    add(data) {
        this.data.push(data);
        console.log(this.data);
    }
}

class TodoList extends List {}

const MinhaLista = new TodoList();

const newTodoButton = document.getElementById('newTodo');
if (newTodoButton) {
    newTodoButton.onclick = function () {
        MinhaLista.add('Novo item');
    }
}