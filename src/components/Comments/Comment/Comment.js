import {Component} from "react";

class Comment extends Component {

    render() {
        const {postId, id, name, email, body} = this.props.comment;
        return (
            <div className={"PostBlock"}>
                <div>postId : {postId}</div>
                <div>{id} : {name}</div>
                <div>email : {email}</div>
                <div>body : {body}</div>
            </div>
        )
    }
}

export {Comment}