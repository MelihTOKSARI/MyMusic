import { Video } from "../../models/Video";
import { FavoriteVideoDispatchTypes } from "../actions/FavoriteVideo/FavoriteVideo.types";

interface IDefaultState {
    favoriteVideos: Array<Video>
}

const defaultState: IDefaultState = {
    favoriteVideos: []
}

const FavoriteVideoReducer = (state = defaultState, action: FavoriteVideoDispatchTypes): IDefaultState => {
    let favoriteVideos;
    switch(action.type) {
        case 'ADD_FAVORITE_VIDEO':
            action.video.isFavorite = true;
            favoriteVideos = state.favoriteVideos;
            return {
                ...state,
                favoriteVideos: [
                    ...favoriteVideos,
                    action.video
                ]
            }
        case 'REMOVE_FAVORITE_VIDEO':
            action.video.isFavorite = false;
            favoriteVideos = state.favoriteVideos.filter(t => t.id !== action.video.id);
            return {
                ...state,
                favoriteVideos: [ ...favoriteVideos ]
            }
        default:
            return state
    }
}

export default FavoriteVideoReducer;