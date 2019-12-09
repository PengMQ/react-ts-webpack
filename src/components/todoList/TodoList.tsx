
import * as React from "react";
import {todoListInterface} from '../../types/types'
import {TodoItem} from '../todoItem/TodoItem'

const TodoList = (props: todoListInterface)=>{
    return (
        <ul>
            {props.todoList.map((todoItem)=>(
                <li key={todoItem.id}>
                    <TodoItem id={todoItem.id} text={todoItem.text} completed={todoItem.completed}/>
                </li>

            ))}
        </ul>
    )
};

export default TodoList