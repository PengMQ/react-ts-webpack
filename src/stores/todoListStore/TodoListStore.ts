import {createContext, useMemo} from 'react'
import {decorate, observable, computed, action} from 'mobx'
import {todoItemInterface} from '../../types/types'

export class Todos {
    todos: Array<todoItemInterface> = [
        {id: 0, text: 'clean house', completed: false},
        {id: 1, text: 'cook dinner', completed: false}
    ];

    get uncompletedNumber(){
       return  this.todos.filter((todo, index)=>{
            return !todo.completed;
        }).length;
    }
    toggleTodo = (id: number): void => {
        let index = this.todos.findIndex((item) => {
            return item.id === id;
        });
        this.todos[index].completed = !this.todos[index].completed;
    };
}

decorate(Todos, {
    todos: observable,
    uncompletedNumber: computed
});

export default createContext(new Todos());