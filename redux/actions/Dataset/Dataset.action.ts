import { Dispatch } from "redux";
import XITEApi from "../../../managers/xiteApi.manager";
import { XITEDatasetResponse } from "../../../models/XITEDatasetResponse";
import { GenreDispatchTypes } from "../Genre/Genre.types";

import { AllMusicVideosDispatchTypes } from "../AllMusicVideos/AllMusicVideos.types";
import { GetGenres } from "../Genre/Genre.action";
import { GetMusicVideos } from "../AllMusicVideos/AllMusicVideos.action";
import { DatasetDispatchTypes, GET_DATASET_ERROR, GET_DATASET_PENDING, GET_DATASET_SUCCESS } from "./Dataset.types";
import { AxiosError } from "axios";

export const GetDataset = () => async (dispatch: Dispatch<AllMusicVideosDispatchTypes | DatasetDispatchTypes | GenreDispatchTypes>) => {
    try {
        dispatch({
            type: GET_DATASET_PENDING
        })

        const dataSetResponse = await XITEApi.getRequest<XITEDatasetResponse>('frontend-coding-exercise/main/data/dataset.json');

        dispatch({
            type: GET_DATASET_SUCCESS
        })
        dispatch(GetGenres(dataSetResponse!.genres));
        dispatch(GetMusicVideos(dataSetResponse!.videos));
    } catch(error) {
        console.log('[AllMusicVideos.action-GetDataset] error:', error);
        dispatch({
            type: GET_DATASET_ERROR,
            message: (error as AxiosError).message
        })
    }
}