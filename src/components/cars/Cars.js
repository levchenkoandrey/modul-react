import React, {useEffect, useState} from 'react';
import {CarServices} from "../../services/Car.services";
import Car from "./Car/Car";
import CarForm from "../CarForm/CarForm";

const Cars = () => {
    const [cars, setCars] = useState([]);
    const [showAllCars, setshowAllCars] = useState(null);
    const [carForUpdate, setCarForUpdate] = useState(null);
    const [deleteCar,  setDeleteCar] = useState(null);

    useEffect(() => {
        CarServices.getAll().then(value => value.data).then(value => setCars(value))
    }, [showAllCars])

    return (
        <div className={"CarsBlock"}>
            <div className={"Form"}>
                <CarForm setshowAllCars={setshowAllCars} carForUpdate={carForUpdate} deleteCar={deleteCar}/>
            </div>
            <div className={"Cars"}>
                {cars.map(car => <Car key={car.id} car={car} setCarForUpdate={setCarForUpdate} setDeleteCar={setDeleteCar}/>)}
            </div>

        </div>
    );
};

export default Cars;