import { Dispatch } from "redux";
import XITEApi from "../../../managers/xiteApi.manager";
import { XITEDatasetResponse } from "../../../models/XITEDatasetResponse";
import { GenreDispatchTypes, GET_GENRE_LIST } from "../Genre/Genre.types";

import { AllMusicVideosDispatchTypes, GET_ALL_MUSIC_VIDEOS } from "../AllMusicVideos/AllMusicVideos.types";
import { GetGenres } from "../Genre/Genre.action";
import { GetMusicVideos } from "../AllMusicVideos/AllMusicVideos.action";

export const GetDataset = () => async (dispatch: Dispatch<AllMusicVideosDispatchTypes | GenreDispatchTypes>) => {
    try {
        const dataSetResponse = await XITEApi.getRequest<XITEDatasetResponse>('frontend-coding-exercise/main/data/dataset.json');

        dispatch(GetGenres(dataSetResponse!.genres));
        // dispatch({
        //     type: GET_GENRE_LIST,
        //     genres: dataSetResponse!.genres
        // })
        dispatch(GetMusicVideos(dataSetResponse!.videos));
        // dispatch({
        //     type: GET_ALL_MUSIC_VIDEOS,
        //     videos: dataSetResponse!.videos
        // })
    } catch(error) {
        console.log('[AllMusicVideos.action-GetDataset] error:', error);
    }
}