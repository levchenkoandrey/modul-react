import {carsAPIService} from "./axios.service";
import {urls} from "../constants";

const carService = {
    getAll: () => carsAPIService.get(urls.cars),
    create: (car) => carsAPIService.post(urls.cars, car),
    updateById: (id, car) => carsAPIService.put(urls.cars.byId(id), car),
    delete: (id) => carsAPIService.delete(urls.cars.byId(id))
}

export {
    carService
}