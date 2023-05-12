import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";

import Comment from "./Comment/Comment";
import "../Todos/Todos.css"
import {commentService} from "../../services/comment.service";

const Comments = () => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        commentService.getAll().then(value => value.data).then(value => setComments([...value]))
    }, []);

    return (
        <div>
            <Outlet/>
            <div className={"FatherBlock CommentsBlock"}>
                {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
            </div>
        </div>
    );
};

export default Comments;