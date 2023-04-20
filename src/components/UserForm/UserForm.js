import React, {useEffect, useState} from 'react';
import {useForm} from "react-hook-form";

import {UserServices} from "../../services/User.services";
import User from "./User";
import NewUser from "./newUser/newUser";
import CommentForm from "./CommentForm/CommentForm";
import NewComment from "./NewComment/NewComment";

const UserForm = () => {
    const {register, handleSubmit, reset} = useForm({mode: 'all'});

    const [showUsers, setShowUsers] = useState([]);
    const [showCommentForm, setShowCommentForm] = useState(null);
    const [showNewComment, setShowNewComment] = useState(null);
    const [newUser, setNewUsers] = useState(null);

    useEffect(() => {
        UserServices.getAllUsers().then(value => value.data).then(data => setShowUsers(data))
    }, [])

    const save = async (user) => {
        const {data} = await UserServices.createUser(user);
        setNewUsers(data);
        reset();
    }

    return (
        <div className={"UserForm"}>User Form
            <form onSubmit={handleSubmit(save)}>
                <input className={"Input"} type="text" placeholder={"name"} {...register("name", {require: true})}/>
                <input className={"Input"} type="email" placeholder={"email"} {...register("email", {require: true})}/>
                <button>Save User</button>
            </form>
            <div>
                {showCommentForm &&
                    <CommentForm showCommentForm={showCommentForm} setShowNewComment={setShowNewComment}/>}
            </div>
            <div>
                {showNewComment && <NewComment showNewComment={showNewComment}/>}
            </div>

            <div>
                {newUser && <NewUser newUser={newUser}/>}
            </div>
            {showUsers.map(user => <User key={user.id} user={user} newUser={newUser}
                                         setShowCommentForm={setShowCommentForm}/>)}
        </div>
    );
};

export default UserForm;