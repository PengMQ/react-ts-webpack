import * as React from 'react';
import {useState} from "react";
import  './App.scss';

function App(){
    const [count, setCount] = useState(0);
    return (
        <div>
            <div>You have clicked {count} times.</div>
            <button className="green" onClick={()=>setCount(count + 1)}> click </button>
        </div>
    );
}

export default App;