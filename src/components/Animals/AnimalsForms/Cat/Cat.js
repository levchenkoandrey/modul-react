import React from 'react';

const Cat = ({cat, index, deleteCat}) => {
    return (
        <div>
            {cat}
            <button onClick={() => deleteCat(index)}>Delete</button>
        </div>

    );
};

export default Cat;