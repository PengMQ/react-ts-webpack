import * as React from 'react';
import {useContext} from "react";
import {Observer} from 'mobx-react-lite';
import TodoList from '../todoList/TodoList';
import todosContext from '../../stores/todoListStore/TodoListStore';
import UserObserverPerson from '../mobxFeature/useObserverPerson/UseObserverPerson'
import ObservePerson from '../mobxFeature/observerPerson/ObserverPerson'
import ObserverLowercasePerson from "../mobxFeature/observerLowercasePerson/ObserverLowercasePerson";
import ContextButton from '../button/ContextButton'
import './App.scss'


const App = () => {
    const todosStore = useContext(todosContext);
    console.log('<App>');
    return (
        <div>
            <h6>React hooks && Mobx example</h6>

            <div className={'block'}>
                <div>todoList example:</div>
                <Observer>
                    {() => {
                        console.log('<Observer>');
                        return <div>There are
                            <span style={{display: 'inline-block', margin: '0 10px', color: 'green'}}>
                                 {todosStore.uncompletedNumber}</span>
                            todo left
                        </div>
                    }}
                </Observer>
                <TodoList todoList={todosStore.todos} toggleTodo={todosStore.toggleTodo}/>
            </div>

            <div className={'block'}>
                <div>UseContext example:</div>
                <ContextButton></ContextButton>
            </div>

            <div className='block'>
                <div>useObserver vs &lt;Observer&gt;&lt;/Observer&gt; vs observer</div>
                <div className='block'>
                    <div>observer example:</div>
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