import React, {FC} from 'react';

import {IComment} from "../../../interfaces/comment.interface";

interface IProps {
    comment: IComment
}

const Comment: FC<IProps> = ({comment}) => {
    const {id, name, email, body} = comment;
    return (
        <div>
            <div>id : {id}</div>
            <div>name : {name}</div>
            <div>email : {email}</div>
            <p>body : {body}</p>
        </div>
    );
};

export default Comment;