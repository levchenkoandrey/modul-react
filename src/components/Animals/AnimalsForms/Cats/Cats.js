import React from 'react';
import {useForm} from "react-hook-form";

const Cats = ({stateDispatch}) => {
    const [{cats}, dispatch] = stateDispatch;
    const {reset,register,handleSubmit} = useForm();
    const saveCat = (cat) => {
        dispatch({type:'ADD_CAT', payload:cat});
        reset();
    };
    return (
        <div>
            <form onSubmit={handleSubmit(saveCat)}>
                <input type="text" placeholder={'name'} {...register('name')}/>
                <button>Save</button>
            </form>
            {cats.map(cat=> <div key={cat.id}>{cat.name} <button onClick={()=>dispatch({type:'DEL_CAT',payload:cat.id})}>delete</button></div>)}
        </div>


    );
};

export default Cats;