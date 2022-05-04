import { Genre } from "../../../models/Genre";
import { GenreDispatchTypes, GET_GENRE_LIST } from "./Genre.types";

export const GetGenres = (genres: Array<Genre>): GenreDispatchTypes => {
    return {
        type: GET_GENRE_LIST,
        genres
    }
}