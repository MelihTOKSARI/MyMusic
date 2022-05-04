import { Video } from "../../../models/Video";
import { AllMusicVideosDispatchTypes, GET_ALL_MUSIC_VIDEOS, LOAD_VIDEOS } from "./AllMusicVideos.types";

export const GetMusicVideos = (videos: Array<Video>): AllMusicVideosDispatchTypes => {
    return {
        type: GET_ALL_MUSIC_VIDEOS,
        videos
    }
}

export const LoadVideos = () => {
    return {
        type: LOAD_VIDEOS
    }
}