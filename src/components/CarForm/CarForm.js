import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {CarServices} from "../../services/Car.services";

const CarForm = ({setshowAllCars, carForUpdate,deleteCar}) => {
    const {register, handleSubmit, reset, formState: {errors, isValid}, setValue} = useForm({mode: 'all'});
    useEffect(() => {
        if (carForUpdate) {
            setValue('brand', carForUpdate.brand, {shouldValidate: true})
            setValue('price', carForUpdate.price, {shouldValidate: true})
            setValue('year', carForUpdate.year, {shouldValidate: true})
        }
    }, [carForUpdate])
    useEffect(() => {
        if (deleteCar) {
            setValue('brand', deleteCar.brand, {shouldValidate: true})
            setValue('price', deleteCar.price, {shouldValidate: true})
            setValue('year', deleteCar.year, {shouldValidate: true})
        }
    }, [deleteCar])
    const saveCar = async (car) => {
        const {data} = await CarServices.create(car);
        setshowAllCars(listCar => !listCar);
        reset();
    }
    const updateCar = async (car) => {
        const {data} = await CarServices.updateById(carForUpdate.id, car);
        setshowAllCars(listCar => !listCar);
        reset();
    }
    const deleteСhosenCar = async (car)=>{
        const {data} = await CarServices.deleteById(deleteCar.id);
        setshowAllCars(listCar => !listCar);
        reset();
    }

    return (
        <form onSubmit={handleSubmit(carForUpdate ? updateCar : deleteCar? deleteСhosenCar: saveCar)}>
            <input className={"Input"} type="text" placeholder={"brand"}{...register('brand', {
                pattern: {
                    value: /^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/,
                    message: 'Бренд має складатися лише з літери та його довжина має бути від 1 до 20 літер'
                },
                required: {value: true, message: 'Поле обов\'язково має бути заповнене'}
            })}/>
            {errors.brand && <div>{errors.brand.message}</div>}

            <input className={"Input"} type="text" placeholder={"price"}{...register('price', {
                valueAsNumber: true,
                min: {value: 0, message: 'Мінімальна ціна 0'},
                max: {value: 1000000, message: 'Максимальна ціна 1млн.'},
                required: {value: true, message: 'Поле обов\'язково має бути заповнене'}
            })}/>
            {errors.price && <div>{errors.price.message}</div>}

            <input className={"Input"} type="text" placeholder={"year"}{...register('year', {
                valueAsNumber: true,
                min: {value: 1990, message: 'Мінімальний рік випуску 1990'},
                max: {value: new Date().getFullYear(), message: 'Максимальний рік поточній'},
                required: {value: true, message: 'Поле обов\'язково має бути заповнене'}
            })}/>
            {errors.year && <div>{errors.year.message}</div>}

            <button disabled={!isValid}>{carForUpdate ? 'Update' :deleteCar? 'delete':'Save'}</button>
        </form>
    );
};

export default CarForm;