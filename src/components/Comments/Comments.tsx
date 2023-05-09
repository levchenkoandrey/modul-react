import React, {FC} from 'react';

import {IComment} from "../../interfaces/comment.interface";
import Comment from "./Comment/Comment";

interface IProps {
    comments: IComment[]
}

const Comments: FC<IProps> = ({comments}) => {
    return (
        <div>
            {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export default Comments;