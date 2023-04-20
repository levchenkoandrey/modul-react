import {axiosService} from "./axios.servis";
import {urls} from "../configs/URLs";

const TodosServises = {
    getData: () => axiosService.get(urls.todos)
}
const AlbumsServices = {
    getData: () => axiosService.get(urls.albums)
}
const CommentsServices = {
    getData: () => axiosService.get(urls.comments)
}
const PostsServices = {
    getPost: (id) => axiosService.get(`${urls.posts}/${id}`)
}

export {
    TodosServises,
    AlbumsServices,
    CommentsServices,
    PostsServices
}