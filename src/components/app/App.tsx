import * as React from 'react';
import {useState} from "react";
import './App.scss';

const Moon = require('./images/moon.jpg');

function App() {
    const [count, setCount] = useState(0);
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
        </div>
    );

}

export default App;