import React, {FC, useEffect, useState} from 'react';

import Comments from "../components/Comments/Comments";
import CommentForm from "../components/Comments/CommentForm";
import {IComment} from "../interfaces/comment.interface";
import {commentService} from "../services/comment.service";

interface IProps {
}

const CommentPage: FC<IProps> = () => {
    const [comments, setComments] = useState<IComment[]>([]);

    useEffect(() => {
        commentService.getAll().then(value => value.data).then(value => setComments([...value]))
    }, [])
    return (
        <div>
            <CommentForm setComments={setComments}/>
            <hr/>
            <Comments comments={comments}/>
        </div>
    );
};

export {CommentPage};