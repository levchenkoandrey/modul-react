import React from 'react';

const Car = ({car,setCarForUpdate,setDeleteCar}) => {
    const {id, brand, price, year} = car;
    return (
        <div className={"Car"}>
            <div>Car : {id}</div>
            <div>brand : {brand}</div>
            <div>price : {price}</div>
            <div>year : {year}</div>
            <button className={"Button"} onClick={() => setCarForUpdate(car)}>update</button>
            <button className={"Button"} onClick={() => setDeleteCar(car)}>delete</button>
        </div>
    );
};

export default Car;