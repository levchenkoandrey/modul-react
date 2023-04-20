import React from 'react';

import '../Todos.css'

const Todo = ({todo}) => {
    const {id, userID, title, completed} = todo;
    return (
        <div className={"ChildBlock"}>
            <div>id : {id}</div>
            <div>userID : {userID}</div>
            <div>title : {title}</div>
            <div>completed : {JSON.stringify(completed)}</div>
        </div>
    );
};

export default Todo;