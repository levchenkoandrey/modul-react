import {Component} from "react";

class Post extends Component {
    render() {
        const {userId, id, title, body} = this.props.post;
        return (<div className={"PostBlock"}>
                <div>userId : {userId}</div>
                <div>{id} : {title}</div>
                <div>body : {body}</div>
            </div>

        )
    }
}

export {Post}