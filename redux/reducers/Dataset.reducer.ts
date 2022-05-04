import { DatasetDispatchTypes } from "../actions/Dataset/Dataset.types"

interface IDefaultState {
    errorMessage: string,
    hasError: boolean,
    isLoading: boolean
}

const defaultState: IDefaultState = {
    errorMessage: '',
    hasError: false,
    isLoading: true
}

const DatasetReducer = (state = defaultState, action: DatasetDispatchTypes): IDefaultState => {
    // NOTE: ...state spread operator is set for all cases in case new states can be added in the future
    switch(action.type) {
        case 'GET_DATASET_ERROR':
            return {
                ...state,
                errorMessage: action.message,
                hasError: true,
                isLoading: false
            }
        case 'GET_DATASET_PENDING':
            return {
                ...state,
                errorMessage: '',
                hasError: false,
                isLoading: true
            }
        case 'GET_DATASET_SUCCESS':
            return {
                ...state,
                errorMessage: '',
                hasError: false,
                isLoading: false
            }
        default:
            return state;
    }
}

export default DatasetReducer;