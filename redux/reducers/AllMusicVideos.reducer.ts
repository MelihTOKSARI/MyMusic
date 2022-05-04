import { Video } from "../../models/Video";
import { AllMusicVideosDispatchTypes } from "../actions/AllMusicVideos.types";

interface IDefaultState {
    musicVideos?: Array<Video>
}

const defaultState: IDefaultState = {
    musicVideos: []
}

const AllMusicVideosReducer = (state = defaultState, action: AllMusicVideosDispatchTypes): IDefaultState => {
    switch(action.type) {
        case 'GET_ALL_MUSIC_VIDEOS':
            return state;
        default:
            return state;
    }
}

export default AllMusicVideosReducer;