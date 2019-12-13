import * as React from 'react';
import {useContext} from "react";
import TodoList from '../todoList/TodoList'
import todosContext from '../../stores/todoListStore/TodoListStore';


const App = () => {
    const todosStore = useContext(todosContext);
    return (
        <div>
            <h6>React hooks example</h6>
            <TodoList todoList={todosStore.todos} toggleTodo={todosStore.toggleTodo}/>
        </div>
    );

};

export default App;