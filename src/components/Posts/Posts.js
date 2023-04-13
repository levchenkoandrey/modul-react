import React, {useEffect, useState} from 'react';
import Post from "./Post/Post";

const Posts = () => {
    let [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(value => value.json())
            .then(Posts => {
                setPosts(Posts);
                // console.log(Posts)
            })
    }, [])
    return (
        <div>
            <div className={"header"}>Posts</div>
            <div className={"PostsBlock"}>
                {
                    posts.map(value =>
                        <Post post={value} key={value.id}/>)
                }
            </div>
            <hr/>
        </div>

    );
};

export default Posts;