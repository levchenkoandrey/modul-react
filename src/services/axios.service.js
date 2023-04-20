import axios from "axios";

import {jsonPHURL} from "../configs/Urls";
import {baseURL} from "../configs/Urls"

const axiosService = axios.create({baseURL});
const axiosUserService = axios.create({
    baseURL: jsonPHURL,
    headers: {'Content-type': 'application/json; charset=UTF-8'}
})

export {
    axiosUserService,
    axiosService
}