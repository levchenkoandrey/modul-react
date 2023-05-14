import React, {FC} from 'react';
import {ICar} from "../interfaces";
import {useAppDispatch} from "../hooks";
import {carAction} from "../redux";

interface IProps {
    car:ICar
}

const Car:FC<IProps> = ({car}) => {
    const dispatch = useAppDispatch();
    const {id, brand,price,year} = car;


    return (
        <div>
            <div>id : {id}</div>
            <div>brand : {brand}</div>
            <div>price : {price}</div>
            <div>year : {year}</div>
            <button onClick={() => dispatch(carAction.setCarForUpdate(car))}>Update</button>
            <button onClick={()=> dispatch((carAction.deleteCar({id})))}>Delete</button>
        </div>
    );
};

export {Car};