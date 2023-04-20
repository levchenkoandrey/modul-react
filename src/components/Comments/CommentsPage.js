import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";

import {CommentsServices} from "../../services/getServises";
import Comment from "./Comment/Comment";
import "../Todos/Todos.css"

const CommentsPage = () => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        CommentsServices.getData().then(value => value.data).then(data => setComments(data))
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

export default CommentsPage;