import * as React from 'react';
import {useContext} from "react";
import TodoList from '../todoList/TodoList'
import todosContext from '../../stores/todoListStore/TodoListStore';
import UserObserverPerson from '../mobxFeature/useObserverPerson/UseObserverPerson'
import ObservePerson from '../mobxFeature/observerPerson/ObserverPerson'


const App = () => {
    const todosStore = useContext(todosContext);
    return (
        <div>
            <h6>React hooks && Mobx example</h6>
            <div style={{border: '1px solid black', marginBottom: '10px'}}>
                todoList example:
                <TodoList todoList={todosStore.todos} toggleTodo={todosStore.toggleTodo}/>
            </div>

            <div style={{border: '1px solid black', padding: '10px'}}>
                <div>useObserver vs &lt;Observer&gt;&lt;/Observer&gt; </div>
                <div style={{border: '1px solid green'}}>
                    <div>useObserver example:</div>
                    <div><UserObserverPerson></UserObserverPerson></div>
                </div>
                <div style={{border: '1px solid pink', marginTop: '10px'}}>
                    <div>&lt;Observer&gt;&lt;/Observer&gt; example:</div>

                    <div><ObservePerson></ObservePerson></div>
                </div>
            </div>
        </div>
    );

};

export default App;