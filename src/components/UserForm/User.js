import React from 'react';

const User = ({user, setShowCommentForm}) => {
    const {id, name, email} = user;
    return (
        <div className={"UserBlock"}>
            <div>id : {id}</div>
            <div>name : {name}</div>
            <div>email : {email}</div>
            <button className={"Button"} onClick={() => setShowCommentForm(user)}>Add Comment</button>
        </div>
    );
};

export default User;