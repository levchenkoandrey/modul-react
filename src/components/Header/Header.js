import React from 'react';
import {NavLink} from "react-router-dom";

import css from './Header.module.css'

const Header = () => {
    return (
        <div className={css.Header}>
            <NavLink to={'posts'}>Posts</NavLink>
            <NavLink to={'comments'}>Comments</NavLink>
            <NavLink to={'cats_dogs'}>Animals</NavLink>
        </div>
    );
};

export default Header;