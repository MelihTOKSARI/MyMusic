import { Video } from "../../../models/Video";

export const GET_ALL_MUSIC_VIDEOS = 'GET_ALL_MUSIC_VIDEOS';

export type GetAllMusicVideos = {
    type: typeof GET_ALL_MUSIC_VIDEOS,
    videos: Array<Video>
}

export type AllMusicVideosDispatchTypes = GetAllMusicVideos