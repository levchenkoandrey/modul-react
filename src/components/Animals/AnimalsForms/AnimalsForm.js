import React, {useReducer, useState} from 'react';

import Cat from "./Cat/Cat";
import Dog from "./Dog/Dog";

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_CAT":
            return {...state, cats: [...state.cats, action.payload]};
        case "ADD_DOG":
            return {...state, dogs: [...state.dogs, action.payload]};
        default:
            return {...state};
    }
}
const AnimalsForm = () => {

    const [state, dispatch] = useReducer(reducer, {cats: [], dogs: []});
    const [newCatName, setNewCatName] = useState("");
    const [newDogName, setNewDogName] = useState("");

    const addCat = () => {
        dispatch({type: "ADD_CAT", payload: newCatName});
        setNewCatName("");
    }

    const addDog = () => {
        dispatch({type: "ADD_DOG", payload: newDogName});
        setNewDogName("");
    }

    const deleteCat = (index) => {
        return (state.cats.splice(index, 1))
    }
    const deleteDog = (index) => {
        return (state.dogs.splice(index, 1))
    }

    return (
        <div>
            <div>
                <input type="text" value={newCatName} onChange={(e) => setNewCatName(e.target.value)}/>
                <button onClick={addCat}>Add Cat</button>
            </div>
            <div>
                <input type="text" value={newDogName} onChange={(e) => setNewDogName(e.target.value)}/>
                <button onClick={addDog}>Add Dog</button>
            </div>
            {state.cats.map((cat, index) => <Cat key={index} cat={cat} index={index} deleteCat={deleteCat}/>)}
            {state.dogs.map((dog, index) => <Dog key={index} dog={dog} index={index} deleteDog={deleteDog}/>)}
        </div>
    );
};

export default AnimalsForm;