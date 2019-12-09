import * as React from "react";
import {todoListInterface} from '../../types/types'
import {TodoItem} from '../todoItem/TodoItem'

const TodoList: React.FC<todoListInterface> = ({todoList, toggleTodo}) => (
    <ul>
        {todoList.map((todoItem) => (
            <li key={todoItem.id}
                onClick={() => {toggleTodo(todoItem.id);console.log('hehe')}}
            >
                <TodoItem id={todoItem.id} text={todoItem.text} completed={todoItem.completed}/>
            </li>

        ))}
    </ul>
);

export default TodoList;


