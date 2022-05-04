import { Genre } from "../../models/Genre";
import { GenreDispatchTypes } from "../actions/Genre/Genre.types";

interface IDefaultState {
    genres: Array<Genre>
}

const defaultState: IDefaultState = {
    genres: []
}

const GenreReducer = (state = defaultState, action: GenreDispatchTypes): IDefaultState => {
    switch(action.type) {
        case 'GET_GENRE_LIST':
            return {
                ...state,
                genres: action.genres
            }
        case 'GENRE_SELECTED':
            const updatedGenres = state.genres.map(item => ({
                ...item,
                selected: item.id === action.genreId ? !item.selected : item.selected
            }))
            return {
                ...state,
                genres: updatedGenres
            }
        default:
            return state;
    }
}

export default GenreReducer;