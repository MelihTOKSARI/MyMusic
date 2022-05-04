import { Video } from "../../../models/Video"
import { ADD_FAVORITE_VIDEO, REMOVE_FAVORITE_VIDEO } from "./FavoriteVideo.types"

export const AddFavoriteVideo = (video: Video) => {
    return {
        type: ADD_FAVORITE_VIDEO,
        video
    }
}

export const RemoveFavoriteVideo = (video: Video) => {
    return {
        type: REMOVE_FAVORITE_VIDEO,
        video
    }
}