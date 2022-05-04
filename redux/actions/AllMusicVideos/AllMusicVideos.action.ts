import { Video } from "../../../models/Video";
import { AllMusicVideosDispatchTypes, CLEAR_FILTER, FILTER_GENRE, FILTER_VIDEOS, GET_ALL_MUSIC_VIDEOS, LOAD_VIDEOS } from "./AllMusicVideos.types";

export const GetMusicVideos = (videos: Array<Video>): AllMusicVideosDispatchTypes => {
    return {
        type: GET_ALL_MUSIC_VIDEOS,
        videos
    }
}

export const ClearFilter = () => {
    return {
        type: CLEAR_FILTER
    }
}

export const FilterVideos = (filterText: string) => {
    return {
        type: FILTER_VIDEOS,
        filterText
    }
}

export const FilterGenre = (genreIds: Array<number>) => {
    return {
        type: FILTER_GENRE,
        genreIds
    }
}

export const LoadVideos = () => {
    return {
        type: LOAD_VIDEOS
    }
}