import * as React from 'react';
import {useState} from "react";
import TodoList from '../todoList/TodoList';
import './App.scss'
import {computed} from "mobx";


const App = () => {
    console.log('<App>');
    let [todos, setTodos] = useState([
        {id: 0, text: 'clean house', completed: false},
        {id: 1, text: 'cook dinner', completed: false}
    ]);
    const toggleTodo = (index: number) => {
        let newTodos = todos.map((todo, currentIndex) => {
            if (index === currentIndex) {
                return {...todo, completed: !todo.completed};
            } else {
                return todo;
            }
        });
        setTodos(newTodos);
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