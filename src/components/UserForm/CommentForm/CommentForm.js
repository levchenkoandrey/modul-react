import React, {useState} from 'react';
import {useForm} from "react-hook-form";

import {UserServices} from "../../../services/User.services";

const CommentForm = ({showCommentForm, setShowNewComment}) => {
    const {id} = showCommentForm;
    const {register, handleSubmit, reset} = useForm({mode: 'all'});
    const saveComment = async (comment) => {
        const {data} = await UserServices.createComment(comment);
        setShowNewComment(data);
        reset();
    }

    return (
        <div>Comment Form
            <form className={"CommentForm"} onSubmit={handleSubmit(saveComment)}>
                <span className={"Input"}>{id}</span>
                <input className={"Input"} type="text" placeholder={"name"} {...register("name", {require: true})}/>
                <input className={"Input"} type="text" placeholder={"body"} {...register("body", {require: true})}/>
                <button>Save Comment</button>
            </form>
        </div>
    );
};

export default CommentForm;