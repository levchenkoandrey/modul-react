import {Component} from "react";
import React from 'react';

import {postService} from "../../services/posts.service";
import {Post} from "./Post/Post";


class PostsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
        }
    }

    componentDidMount() {
        postService.getAll().then(value => value.data).then(value => this.setState({posts: value}))
    }

    render() {
        return (<div>
                <div className={"Title"}>Posts</div>
                <div>{this.state.posts.map(post => <Post key={post.id} post={post}/>)}</div>

            </div>)
    }
}

export {PostsPage}

