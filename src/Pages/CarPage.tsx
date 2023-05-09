import React, {FC, useEffect, useState} from 'react';

import CarForm from "../components/Cars/CarForm";
import Cars from "../components/Cars/Cars";
import {ICar} from "../interfaces/car.interface";
import {carService} from "../services/car.service";

interface IProps {

}

const CarPage: FC<IProps> = () => {
    const [cars, setCars] = useState<ICar[]>([]);

    const [onChange, setOnChange] = useState<boolean>(false);

    const [carForUpdate, setCarForUpdate] = useState<ICar | null>(null);

    useEffect(() => {
        carService.getAll().then(value => value.data).then(value => setCars([...value]))
    }, [onChange, carForUpdate])

    return (
        <div>
            <CarForm setOnChange={setOnChange} carForUpdate={carForUpdate} setCarForUpdate={setCarForUpdate}/>
            <hr/>
            <Cars cars={cars} setCarForUpdate={setCarForUpdate} setOnChange={setOnChange}/>
        </div>
    );
};

export {CarPage};
