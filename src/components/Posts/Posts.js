import React, {useEffect, useState} from 'react';

const Posts = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(value => value.json())
            .then(Posts => {
                setPosts(Posts);
            })
    })
    return (
        <div>
            posts.map()
        </div>
    );
};

export default Posts;