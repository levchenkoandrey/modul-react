import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import './Post.css'
import {postService} from "../../services/post.service";

const Post = () => {

    const {postId} = useParams();

    const [post, setPost] = useState(null);

    useEffect(() => {
        postService.getById(postId).then(value => value.data).then(value => setPost(value))
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