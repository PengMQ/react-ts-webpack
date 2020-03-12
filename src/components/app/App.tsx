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
import Announcement from "../announcement/Announcement";

const App = () => {
    const todosStore = useContext(todosContext);
    console.log('<App>');
    return (
        <div>
            <Announcement></Announcement>
        </div>
    );

};

export default App;