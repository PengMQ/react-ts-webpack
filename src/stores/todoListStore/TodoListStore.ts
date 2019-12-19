import {createContext} from 'react'
import {decorate, observable, computed} from 'mobx'
import {todoItemInterface} from '../../types/types'

export class Todos {
    todos: Array<todoItemInterface> = [
        {id: 0, text: 'clean house', completed: false},
        {id: 1, text: 'cook dinner', completed: false}
    ];

    get uncompletedNumber() {
        return this.todos.filter((todo, index) => {
            return !todo.completed;
        }).length;
    }

    toggleTodo = (index: number): void => {
        this.todos[index].completed = !this.todos[index].completed;
    };
}

decorate(Todos, {
    todos: observable,
    uncompletedNumber: computed
});

export default createContext(new Todos());