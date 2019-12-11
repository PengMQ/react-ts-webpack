import * as React from 'react';
import {useState, useContext} from "react";
import TodoList from '../todoList/TodoList'
import {todoItemInterface} from '../../types/types'
import {observer} from "mobx-react-lite";
import todosContext from '../../stores/todoListStore/TodoListStore';


const App = observer(() => {
    console.log('in App.tsx');
        const todosStore = useContext(todosContext);
        return (
            <div>
                <h6>React hooks example</h6>
                <TodoList todoList={todosStore.todos} toggleTodo={todosStore.toggleTodo}/>
            </div>
        );

    }
)
export default App;