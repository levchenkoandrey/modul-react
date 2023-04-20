import React, {useEffect, useState} from 'react';

import {TodosServises} from "../../services/getServises";
import Todo from "./Todo/Todo";
import './Todos.css'

const TodosPage = () => {
    const [todo, setTodo] = useState([]);

    useEffect(() => {
        TodosServises.getData().then(value => value.data).then(data => setTodo(data))
    }, []);

    return (
        <div>Todos Page
            <div className={"FatherBlock"}>
                {todo.map(todo => <Todo key={todo.id} todo={todo}/>)}
            </div>
        </div>
    );
};

export default TodosPage;