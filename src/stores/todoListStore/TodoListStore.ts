import {createContext} from 'react'
import {decorate, observable, computed, action} from 'mobx'

export class Todos {
    todos = [
        {id: 0, text: 'clean house', completed: false},
        {id: 1, text: 'cook dinner', completed: false}
    ];

    toggleTodo = (id: number): void => {
        let index = this.todos.findIndex((item) => {
            return item.id === id;
        });
        this.todos[index].completed = !this.todos[index].completed;
    };
}

decorate(Todos, {
    todos: observable
});

export default createContext(new Todos());