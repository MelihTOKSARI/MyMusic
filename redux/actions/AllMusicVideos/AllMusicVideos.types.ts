import { Video } from "../../../models/Video";

export const GET_ALL_MUSIC_VIDEOS = 'GET_ALL_MUSIC_VIDEOS';
export const CLEAR_FILTER = 'CLEAR_FILTER';
export const FILTER_VIDEOS = 'FILTER_VIDEOS';
export const FILTER_GENRE = 'FILTER_GENRE';
export const LOAD_VIDEOS = 'LOAD_VIDEOS';

export type GetAllMusicVideos = {
    type: typeof GET_ALL_MUSIC_VIDEOS,
    videos: Array<Video>
}

export type ClearFilter = {
    type: typeof CLEAR_FILTER
}

export type FilterVideos = {
    type: typeof FILTER_VIDEOS,
    filterText: string
}

export type FilterGenre = {
    type: typeof FILTER_GENRE,
    genreIds: Array<number>
}

export type LoadVideos = {
    type: typeof LOAD_VIDEOS
}

export type AllMusicVideosDispatchTypes = GetAllMusicVideos | ClearFilter | FilterVideos | FilterGenre | LoadVideos