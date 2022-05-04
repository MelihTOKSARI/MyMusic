import { Video } from "../../../models/Video";

export const GET_ALL_MUSIC_VIDEOS = 'GET_ALL_MUSIC_VIDEOS';
export const LOAD_VIDEOS = 'LOAD_VIDEOS';

export type GetAllMusicVideos = {
    type: typeof GET_ALL_MUSIC_VIDEOS,
    videos: Array<Video>
}

export type LoadVideos = {
    type: typeof LOAD_VIDEOS
}

export type AllMusicVideosDispatchTypes = GetAllMusicVideos | LoadVideos