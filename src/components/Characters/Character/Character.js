import React from 'react';

const Character = ({item}) => {
    return (
        <div className="block">
            <img src={item.image} className="CharImg"/>
            <h1>{item.id} : {item.name}</h1>
            <div className="body">
                <h2>Status: {item.status}</h2>
                <h2>Species: {item.species}</h2>
                <h2>gender: {item.gender}</h2>
            </div>
        </div>
    );
};

export default Character;