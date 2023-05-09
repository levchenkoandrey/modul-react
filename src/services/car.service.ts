import {IRes} from "../types/responce.type";
import {ICar} from "../interfaces/car.interface";
import {carsAxiosService} from "./axios.service";
import {urls} from "../constants/urls";

const carService = {
    getAll: (): IRes<ICar[]> => carsAxiosService.get(urls.carAPI.cars),
    create: (car: ICar): IRes<ICar> => carsAxiosService.post(urls.carAPI.cars, car),
    updateById: (id: number, car: ICar): IRes<ICar> => carsAxiosService.put(urls.carAPI.byId(id), car),
    delete: (id: number): IRes<void> => carsAxiosService.delete(urls.carAPI.byId(id))
}

export {
    carService
}