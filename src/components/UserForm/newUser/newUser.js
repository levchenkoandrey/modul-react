import React from 'react';

const NewUser = ({newUser}) => {
    const {id, name, email} = newUser;
    return (
        <div className={"UserBlock NewUser"}>New User
            <div>id : {id}</div>
            <div>name : {name}</div>
            <div>email : {email}</div>
        </div>
    );
};

export default NewUser;