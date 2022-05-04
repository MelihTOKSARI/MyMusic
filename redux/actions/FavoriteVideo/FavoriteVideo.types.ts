import { Video } from "../../../models/Video";

export const ADD_FAVORITE_VIDEO = 'ADD_FAVORITE_VIDEO';
export const REMOVE_FAVORITE_VIDEO = 'REMOVE_FAVORITE_VIDEO';

export type AddFavoriteVideo = {
    type: typeof ADD_FAVORITE_VIDEO,
    video: Video
}

export type RemoveFavoriteVideo = {
    type: typeof REMOVE_FAVORITE_VIDEO,
    video: Video
}

export type FavoriteVideoDispatchTypes = AddFavoriteVideo | RemoveFavoriteVideo