import {IRes} from "../types/responce.type";
import {IComment} from "../interfaces/comment.interface";
import {urls} from "../constants/urls";
import {placeAxiosService} from "./axios.service";

const commentService = {
    getAll: (): IRes<IComment[]> => placeAxiosService.get(urls.placeAPI.comments),
    create: (comment: IComment): IRes<IComment> => placeAxiosService.post(urls.placeAPI.comments, comment)
}

export {
    commentService
}