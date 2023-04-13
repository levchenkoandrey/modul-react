import React, {useState} from 'react';


const Post = ({post}) => {
    const {id, title} = {...post}
    const [details, setDetails] = useState(null)
    return (
        <div className={"PostBlock"}>
            <div className={"title"}>
                <span>{id} : {title} </span>
            </div>
            {
                details
                &&
                <div>
                    <h1>UserID - {details.userId}</h1>
                    <p>{details.body}</p>
                </div>
            }
            <button onClick={() => {
                setDetails(post)
            }
            }>details
            </button>
        </div>
    );
};

export default Post;