import * as React from 'react';
import {useState} from "react";

function App(){
    const [count, setCount] = useState(0);
    return (
        <div>
            <div>You have clicked {count} times.</div>
            <button onClick={()=>setCount(count + 1)}> click </button>
        </div>
    );
}

export default App;