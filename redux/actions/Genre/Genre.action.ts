import { Genre } from "../../../models/Genre";
import { GenreDispatchTypes, GENRE_SELECTED, GET_GENRE_LIST } from "./Genre.types";

export const GetGenres = (genres: Array<Genre>): GenreDispatchTypes => {
    return {
        type: GET_GENRE_LIST,
        genres
    }
}

export const GenreSelected = (genreId: number) => {
    return {
        type: GENRE_SELECTED,
        genreId
    }
}