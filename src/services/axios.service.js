import axios from "axios";
import {jsonPHURL} from "../configs/Urls";
import {baseURL} from "../configs/Urls"

const axiosService = axios.create({baseURL});
const axiosUserService = axios.create({baseURL: jsonPHURL})

export {
    axiosUserService,
    axiosService
}