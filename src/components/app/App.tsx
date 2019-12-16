import * as React from 'react';
import {useContext} from "react";
import TodoList from '../todoList/TodoList'
import todosContext from '../../stores/todoListStore/TodoListStore';
import UserObserverPerson from '../mobxFeature/useObserverPerson/UseObserverPerson'
import ObservePerson from '../mobxFeature/observerPerson/ObserverPerson'
import ObserverLowercasePerson from "../mobxFeature/observerLowercasePerson/ObserverLowercasePerson";
import './App.scss'


const App = () => {
    const todosStore = useContext(todosContext);
    return (
        <div>
            <h6>React hooks && Mobx example</h6>
            <div className={'block'}>
                todoList example:
                <TodoList todoList={todosStore.todos} toggleTodo={todosStore.toggleTodo}/>
            </div>

            <div className='block'>
                <div>useObserver vs &lt;Observer&gt;&lt;/Observer&gt; vs observer </div>
                <div className='block'>
                    observer example:
                    <div>
                        <ObserverLowercasePerson></ObserverLowercasePerson>
                    </div>
                </div>
                <div className='block'>
                    <div>useObserver example:</div>
                    <div><UserObserverPerson></UserObserverPerson></div>
                </div>
                <div className='block'>
                    <div>&lt;Observer&gt;&lt;/Observer&gt; example:</div>

                    <div><ObservePerson></ObservePerson></div>
                </div>
            </div>
        </div>
    );

};

export default App;