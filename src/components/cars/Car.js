import React from 'react';
import {useDispatch} from "react-redux";
import {carActions} from "../../redux";
import {carService} from "../../services";

const Car = ({car}) => {
    const {id, brand, price, year} = car;
    const dispatch = useDispatch();
    const deleteCar = async ()=>{
        await carService.delete(id);
        dispatch(carActions.changeTrigger())
    }

    return (
        <div>
            <div>id : {id}</div>
            <div>brand : {brand}</div>
            <div>price : {price}</div>
            <div>year : {year}</div>
            <button onClick={() => dispatch(carActions.setCarForUpdate(car))}>Update</button>
            <button onClick={deleteCar}>Delete</button>
            <hr/>
        </div>
    );
};

export {Car};