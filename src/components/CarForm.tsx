import React, {FC, useEffect} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";

import {ICar} from "../interfaces";
import {useAppDispatch, useAppSelector} from "../hooks";
import {carAction} from "../redux";
import {Simulate} from "react-dom/test-utils";
import loadedMetadata = Simulate.loadedMetadata;

const CarForm: FC = () => {
    const {register, handleSubmit, reset, setValue} = useForm<ICar>();
    const dispatch = useAppDispatch();
    const {carForUpdate} = useAppSelector(state => state.carReducer);
    useEffect(()=>{
        if (carForUpdate){
            setValue('brand', carForUpdate.brand)
            setValue('price', carForUpdate.price)
            setValue('year', carForUpdate.year)
        }
    },[carForUpdate,setValue])

    const save: SubmitHandler<ICar> = async (car) => {
        await dispatch(carAction.createCar({car}));
        reset();
    }

    const update:SubmitHandler<ICar> = async (car) => {
        await dispatch(carAction.updateCar({id:carForUpdate.id, car}));
        reset();
    };
    return (
        <form onSubmit={handleSubmit(carForUpdate?update:save)}>
            <input type="text" placeholder={'brand'} {...register('brand')}/>
            <input type="text" placeholder={'price'} {...register('price')}/>
            <input type="text" placeholder={'year'} {...register('year')}/>
            <button>{carForUpdate?'Update':'Save'}</button>
        </form>
    );
};

export {CarForm};