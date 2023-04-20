import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {PostsServices} from "../../services/getServises";
import './Post.css'

const Post = () => {

    const {postId} = useParams();
    console.log(postId);
    const [post, setPost] = useState(null);
    useEffect(() => {
        PostsServices.getPost(postId).then(value => value.data).then(data => setPost(data))
    }, [postId])
    return (
        <div className={"Block"}>
            {post &&
                <div className={"PostBlock"}> Post
                    <button onClick={() => setPost(null)}>x</button>
                    <div>UserId: {post.id}</div>
                    <div>title: {post.title}</div>
                    <div>body: {post.body}</div>
                </div>
            }
        </div>
    );
};

export default Post;