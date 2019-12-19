import * as React from "react";
import {todoListInterface} from '../../types/types'
import {TodoItem} from '../todoItem/TodoItem'
import {observer} from 'mobx-react-lite'

const TodoList: React.FC<todoListInterface> = observer(function ({todoList, toggleTodo}) {
    return (
        <ul>
            {todoList.map((todoItem, index) => (
                <li key={todoItem.id}
                    onClick={() => {
                        toggleTodo(index)
                    }}
                >
                    <TodoItem id={todoItem.id} text={todoItem.text} completed={todoItem.completed}/>
                </li>

            ))}
        </ul>
    )
});

export default TodoList;


