import { Video } from "../../models/Video";
import { AllMusicVideosDispatchTypes } from "../actions/AllMusicVideos/AllMusicVideos.types";

interface IDefaultState {
    musicVideos: Array<Video>,
    visibleVideos: Array<Video>
}

const defaultState: IDefaultState = {
    musicVideos: [],
    visibleVideos: []
}

const AllMusicVideosReducer = (state = defaultState, action: AllMusicVideosDispatchTypes): IDefaultState => {
    switch(action.type) {
        case 'GET_ALL_MUSIC_VIDEOS':
            return {
                ...state,
                musicVideos: action.videos,
                visibleVideos: action.videos.slice(0, 50)
            };
        case 'LOAD_VIDEOS':
            const visibleVideos = [ ...state.visibleVideos, ...state.musicVideos.slice(state.visibleVideos.length, state.visibleVideos.length + 50)];
            return {
                ...state,
                visibleVideos
            }
        default:
            return state;
    }
}

export default AllMusicVideosReducer;