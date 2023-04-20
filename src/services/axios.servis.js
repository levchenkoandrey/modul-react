import axios from "axios"
import {baseURL} from "../configs/URLs";
const axiosService = axios.create({baseURL})

export {
    axiosService
}