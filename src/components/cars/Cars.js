import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {carService} from "../../services";
import {carActions} from "../../redux";
import {Car} from "./Car";

const Cars = () => {
    const {cars, trigger} = useSelector(state => state.cars);
    const dispatch = useDispatch();
   useEffect(()=>{
       carService.getAll().then(value => value.data).then(value => dispatch(carActions.setAll(value)))
    },[dispatch, trigger]);

    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars};