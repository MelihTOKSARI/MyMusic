export const GET_DATASET_ERROR = 'GET_DATASET_ERROR';
export const GET_DATASET_PENDING = 'GET_DATASET_PENDING';
export const GET_DATASET_SUCCESS = 'GET_DATASET_SUCCESS';

export type GetDatasetError = {
    type: typeof GET_DATASET_ERROR,
    message: string
}

export type GetDatasetPending = {
    type: typeof GET_DATASET_PENDING
}

export type GetDatasetSuccess = {
    type: typeof GET_DATASET_SUCCESS
}

export type DatasetDispatchTypes = GetDatasetError | GetDatasetPending | GetDatasetSuccess