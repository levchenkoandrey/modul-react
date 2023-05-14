import React, {FC, useEffect} from 'react';
import {Car} from "./Car";
import {useAppDispatch, useAppSelector} from "../hooks";
import {carAction} from "../redux";

const Cars:FC= () => {
    const {cars,trigger} = useAppSelector(state => state.carReducer);
 const dispatch = useAppDispatch();

    useEffect(()=>{
        dispatch(carAction.getAll())
    },[dispatch, trigger])
    return (
        <div>
            {cars.map(car=> <Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars};