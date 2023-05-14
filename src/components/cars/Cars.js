import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Car} from "./Car";
import {carActions} from "../../redux";

const Cars = () => {
    const {cars, trigger} = useSelector(state => state.cars);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(carActions.getAllCar())
    },[dispatch, trigger]);

    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>

    );
};


export {Cars};