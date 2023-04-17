import {urlsJPH} from "../configs/Urls";
import {axiosUserService} from "./axios.service";

const UserServices = {
    getAllUsers: () => axiosUserService.get(urlsJPH.users),
    createUser: (user) => axiosUserService.post(urlsJPH.users, user),
    createComment: (comment) => axiosUserService.post(urlsJPH.comments, comment)
}

export {
    UserServices
}