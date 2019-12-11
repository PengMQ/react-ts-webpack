import * as React from 'react';
import {useState} from "react";
import TodoList from '../todoList/TodoList'
import {todoItemInterface} from '../../types/types'

function App() {
    let [todos, setTodos] = useState<todoItemInterface[]>([
        {id: 0, text: 'clean house', completed: false},
        {id: 1, text: 'cook dinner', completed: false}
    ]);
    let toggleTodo = (id: number): void => {
        let index = todos.findIndex((item) => {
            return item.id === id;
        });
        let newTodos = todos.map((todo, currentIndex) => {
            if (currentIndex === index) {
                return {...todo, completed: !todo.completed}
            } else {
                return todo;
            }

        });
        //You have to call the setTodos() with a new array reference, Or the TodoItem will
        // not render again.
        setTodos(newTodos);
    };
    return (
        <div>
            <h6>React hooks example</h6>
            <TodoList todoList={todos} toggleTodo={toggleTodo}/>
        </div>
    );

}

export default App;