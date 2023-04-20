import React from 'react';

const Todo = ({todo}) => {
    const {id, userID, title, completed} = todo;
    return (
        <div {"ChildBlock"}>
           <div>id : {id}</div>
           <div>userID : {userID}</div>
           <div>title : {title}</div>
           <div>completed : {completed}</div>
        </div>
    );
};

export default Todo;