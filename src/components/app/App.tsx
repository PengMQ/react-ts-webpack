import * as React from 'react';
import {useContext, useState} from "react";
import TodoList from '../todoList/TodoList';
import './App.scss'


const App = () => {
    console.log('<App>');
    let [todos, setTodos] = useState([
        {id: 0, text: 'clean house', completed: false},
        {id: 1, text: 'cook dinner', completed: false}
    ]);
    const toggleTodo = (id: number) => {
        let index = todos.findIndex((item) => {
            return item.id === id;
        });
        todos[index].completed = !todos[index].completed;
        setTodos(todos);
    };
    return (
        <div>
            <h6>React hooks && Mobx example</h6>

            <div className={'block'}>
                <div>todoList example:</div>
                <TodoList todoList={todos} toggleTodo={toggleTodo}/>
            </div>

        </div>
    );

};

export default App;