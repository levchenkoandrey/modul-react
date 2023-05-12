import React, {FC} from 'react';
import {useNavigate} from "react-router-dom";

import {IUser} from "../interfaces/user.interface";

interface IProps {
    user: IUser
}

const User: FC<IProps> = ({user}) => {
    const {id, name} = user;
    const navigate = useNavigate();
    return (
        <div>
            <div>id : {id}</div>
            <div>name : {name}</div>
            <button onClick={() => navigate(`${id}`, {state: {...user}})}>User Details</button>
        </div>
    );
};

export {User};