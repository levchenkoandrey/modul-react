import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";

import {commentActions} from "../../redux";
import {commentService} from "../../services";

const CommentForm = () => {
    const {reset, register, handleSubmit} = useForm();
    const dispatch = useDispatch();
    const save = async (comment) => {
        const {data} = await commentService.create(comment);
        dispatch(commentActions.create({comment: data}));
        reset();
    };
    return (
        <form onSubmit={handleSubmit(save)}>
            <input type="text" placeholder={'name'} {...register('name')}/>
            <input type="text" placeholder={'email'} {...register('email')}/>
            <button>Save</button>
        </form>
    );
};

export {CommentForm};