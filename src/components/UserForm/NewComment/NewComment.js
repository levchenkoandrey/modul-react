import React from 'react';

const NewComment = ({showNewComment}) => {
    const {id, name, body} = showNewComment;
    return (
        <div className={"UserBlock NewUser"}>New Comment
            <div>id : {id}</div>
            <div>name : {name}</div>
            <div>body : {body}</div>
        </div>
    );
};

export default NewComment;