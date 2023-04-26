import {Component} from "react";
import {commentService} from "../../services/comments.service";
import {Comment} from "./Comment/Comment";


class CommentsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: []
        }
    }

    componentDidMount() {
        commentService.getAll().then(value => value.data).then(value => this.setState({comments: value}))
    }

    render() {
        return (
            <div>
                <div className={"Title"}>Comments</div>
                <div>{this.state.comments.map(comment => <Comment key={comment.id} comment={comment}/>)}</div>
            </div>
        )
    }
}

export {CommentsPage}