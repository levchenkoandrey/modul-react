import React, {useEffect, useState} from 'react';

import {ICar} from "../interfaces/car.interface";
import {carService} from "../services/car.service";
import Car from "./Car";
import CarForm from "./CarForm";
const Cars = () => {
    const [cars, setCars] = useState<ICar[]>([]);
    const [showCars, setShowCars] = useState(null);
    useEffect(()=> {
        carService.getAll().then(value => value.data).then(value => setCars([...value]))
    },[showCars])
    return (
        <div>
            <CarForm setShowCars={setShowCars}/>
            {cars.map(car=> <Car key={car.id} car={car}/>)}
        </div>
    );
};


export default Cars;