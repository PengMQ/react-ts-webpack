import * as React from 'react';
import {useState} from "react";
import TodoList from '../todoList/TodoList'
import {todoItemInterface} from '../../types/types'

function App() {
    const [todos] = useState<todoItemInterface[]>([
        {id: 0, text: 'clean house', completed: false},
        {id: 1, text: 'cook dinner', completed: false}
    ]);
    return (
        <div>
            <h6>React hooks example</h6>
            <TodoList todoList={todos} />
        </div>
    );

}

export default App;