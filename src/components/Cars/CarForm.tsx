import React, {FC, useEffect} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import {carValidator} from "../../validators/car.validator";
import {ICar} from "../../interfaces/car.interface";
import {carService} from "../../services/car.service";
import {IUseState} from "../../types/useState.type";


interface IProps {
    setOnChange: IUseState<boolean>;
    carForUpdate: ICar | null;
    setCarForUpdate: IUseState<ICar | null>
}

const CarForm: FC<IProps> = ({setOnChange, carForUpdate, setCarForUpdate}) => {

    const {register, handleSubmit, reset, formState: {errors, isValid}, setValue} = useForm<ICar>({
        mode: "all",
        resolver: joiResolver(carValidator)
    });

    useEffect(() => {
        if (carForUpdate) {
            Object.entries(carForUpdate).forEach(([key, value]) => {
                if (key !== 'id') {
                    setValue(key as keyof ICar, value, {shouldValidate: true})
                }
            })
        }
    }, [carForUpdate])

    const save: SubmitHandler<ICar> = async (car) => {
        await carService.create(car);
        setOnChange(prevState => !prevState)
        reset();
    };
    const update: SubmitHandler<ICar> = async (car) => {
        carService.updateById(carForUpdate!.id, car);
        setOnChange(prevState => !prevState);
        reset();
        setCarForUpdate(null);
    };
    return (
        <div>
            <form onSubmit={handleSubmit(carForUpdate ? update : save)}>
                <input type="text" placeholder={'brand'} {...register('brand')}/>
                <input type="text" placeholder={'price'} {...register('price')}/>
                <input type="text" placeholder={'year'} {...register('year')}/>
                <button disabled={!isValid}>{carForUpdate ? 'Update' : 'Save'}</button>
            </form>
            <div>
                {errors.brand && <span>{errors.brand.message}</span>}
                {errors.price && <span>{errors.price.message}</span>}
                {errors.year && <span>{errors.year.message}</span>}
            </div>
        </div>

    );
};

export default CarForm;