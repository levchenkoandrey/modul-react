import {axiosService} from "./axios.service";
import {urls} from "../constants/urls";

const commentService = {
    getAll: () => axiosService(urls.comments)
}

export {commentService}