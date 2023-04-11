import React from 'react';
import Character from "./Character/Character";

const Characters = ({arrayCh}) => {
    console.log({arrayCh})
    return (
        <div className="Simpsons">
            <span>Characters</span>
            <div className="SimpsonsBlock">
                {
                    arrayCh.map(value =>
                        (<Character item={value} key={value.id}/>))
                }
            </div>
        </div>

    );
};

export default Characters;