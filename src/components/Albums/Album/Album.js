import React from 'react';
const Album = ({album}) => {
    const {id, userID, title} = album;
    return (
        <div className={"ChildBlock"}>
            <div>id : {id}</div>
            <div>userID : {userID}</div>
            <div>title : {title}</div>
        </div>
    );
};

export default Album;