import { Video } from "../../models/Video";
import { AllMusicVideosDispatchTypes } from "../actions/AllMusicVideos/AllMusicVideos.types";

interface IDefaultState {
    musicVideos: Array<Video>,
    visibleVideos: Array<Video>,
    tmpVisibleVideos: Array<Video>,
    filteredGenres: Array<number>
}

const defaultState: IDefaultState = {
    musicVideos: [],
    visibleVideos: [],
    tmpVisibleVideos: [],
    filteredGenres: []
}



const AllMusicVideosReducer = (state = defaultState, action: AllMusicVideosDispatchTypes): IDefaultState => {
    let tmpVisibleVideos = [];    

    switch(action.type) {
        case 'GET_ALL_MUSIC_VIDEOS':
            return {
                ...state,
                musicVideos: action.videos,
                visibleVideos: action.videos.slice(0, 50)
            };
        case 'CLEAR_FILTER':
            console.log('a ', state.tmpVisibleVideos.length);
            return {
                ...state,
                visibleVideos: state.tmpVisibleVideos
            }
        case 'FILTER_VIDEOS':
            tmpVisibleVideos = action.filterText.length === 1 && state.tmpVisibleVideos.length === 0
                ? state.visibleVideos
                : state.tmpVisibleVideos;

            const filteredVideos = state.musicVideos.filter(t => {
                if(typeof t.title === 'string') {
                    return t.title.toLocaleLowerCase().includes(action.filterText.toLocaleLowerCase());
                }

                return false;
            })
            return {
                ...state,
                visibleVideos: filteredVideos,
                tmpVisibleVideos
            }
        case 'FILTER_GENRE':
            tmpVisibleVideos = action.genreIds.length > 0 && state.tmpVisibleVideos.length === 0
                ? state.visibleVideos
                : state.tmpVisibleVideos;

            console.log('tmpVisibleVideos:', tmpVisibleVideos.length);

            const filteredRecords = state.musicVideos.filter(t => {
                return action.genreIds.includes(t.genre_id);
            })

            return {
                ...state,
                visibleVideos: filteredRecords,
                tmpVisibleVideos: tmpVisibleVideos
            }
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