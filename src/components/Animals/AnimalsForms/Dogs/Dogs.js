import React from 'react';
import {useForm} from "react-hook-form";

const Dogs = ({stateDispatch}) => {
    const [{dogs},dispatch] = stateDispatch;
    const {reset,register,handleSubmit} = useForm();
    const saveDog = (dog) => {
        dispatch({type:'ADD_DOG', payload:dog});
        reset();
    };
    return (
        <div>
            <form onSubmit={handleSubmit(saveDog)}>
                <input type="text" placeholder={'name'} {...register('name')}/>
                <button>Save</button>
            </form>
            {dogs.map(dog=> <div key={dog.id}>{dog.name} <button onClick={()=>dispatch({type:'DEL_DOG', payload:dog.id})}>delete</button></div>)}
        </div>
    );
};

export default Dogs;