import React from 'react';
import {useNavigate} from "react-router-dom";

const Comment = ({comment}) => {
    const {id, postId, name, email, body} = comment;
    const navigate = useNavigate();
    return (
        <div className={"ChildBlock comment"}>
            <div>id : {id}</div>
            <div>postId : {postId}</div>
            <div>name : {name}</div>
            <div>email : {email}</div>
            <div>body : {body}</div>
            <button className={"Button"} onClick={() => navigate(`${postId}`)}>Show Post</button>
        </div>
    );
};

export default Comment;
