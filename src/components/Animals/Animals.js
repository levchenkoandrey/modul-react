import React, {useReducer} from 'react';
import Cats from "./AnimalsForms/Cats/Cats";
import Dogs from "./AnimalsForms/Dogs/Dogs";

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_CAT':
            const cat = action.payload;
            const catId = state.cats.slice(-1)[0]?.id + 1 || 1;
            cat.id = catId;
            return {...state, cats: [...state.cats, cat]};
        case 'ADD_DOG':
            const dog = action.payload;
            const dogId = state.dogs.slice(-1)[0]?.id + 1 || 1;
            dog.id = dogId;
            return {...state, dogs: [...state.dogs, dog]};
        case 'DEL_CAT':
            const idForDelete = action.payload;
            const catIndex = state.cats.findIndex(value => value.id === idForDelete);
            state.cats.splice(catIndex, 1);
            return {...state};
        case 'DEL_DOG':
            const idForDeleteDog = action.payload;
            const dogIndex = state.dogs.findIndex(value => value.id === idForDeleteDog);
            state.dogs.splice(dogIndex, 1);
            return {...state};
        default:
            return state;
    }
};

const Animals = () => {
    const stateDispatch = useReducer(reducer, {cats: [], dogs: []});
    return (
        <div>
            <Cats stateDispatch={stateDispatch}/>
            <Dogs stateDispatch={stateDispatch}/>
        </div>
    );
};

export default Animals;