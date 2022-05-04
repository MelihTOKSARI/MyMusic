import { Genre } from "../../../models/Genre";

export const GET_GENRE_LIST = 'GET_GENRE_LIST';

export type GetGenreList = {
    type: typeof GET_GENRE_LIST,
    genres: Array<Genre>
}

export type GenreDispatchTypes = GetGenreList