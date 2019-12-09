import * as React from 'react';
import {useState} from "react";
import './App.scss';
import TodoList from '../todoList/TodoList'
import {todoItemInterface} from '../../types/types'

const Moon = require('./images/moon.jpg');

function App() {
    const [count, setCount] = useState(0);
    const [todos] = useState<todoItemInterface[]>([
        {id: 0, text: 'clean house', completed: false},
        {id: 1, text: 'cook dinner', completed: false}
    ]);
    return (
        <div>
            <h6>React hooks example</h6>
            <div>
                <div className='black'>You have clicked
                    <span className='count'>{count}</span>
                    times.
                </div>
                <button className="green button" onClick={() => setCount(count + 1)}> click</button>
            </div>
            <img src={Moon} alt=""/>
            <TodoList todoList={todos} />
        </div>
    );

}

export default App;