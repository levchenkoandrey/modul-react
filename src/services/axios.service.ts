import axios from "axios";

import {carsBaseURL, placeBaceURL} from "../constants/urls";

const placeAxiosService = axios.create({baseURL: placeBaceURL});
const carsAxiosService = axios.create({baseURL: carsBaseURL});

export {
    placeAxiosService,
    carsAxiosService
}