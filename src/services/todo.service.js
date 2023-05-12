import {axiosService} from "./axios.service";
import {urls} from "../constants/urls";

const todoService = {
    getAll: () => axiosService(urls.todos)
}

export {todoService}