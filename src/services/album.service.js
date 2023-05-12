import {axiosService} from "./axios.service";
import {urls} from "../constants/urls";

const albumService = {
    getAll: () => axiosService(urls.albums)
}

export {albumService}