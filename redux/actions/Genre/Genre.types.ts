import { Genre } from "../../../models/Genre";

export const GET_GENRE_LIST = 'GET_GENRE_LIST';
export const GENRE_SELECTED = 'GENRE_SELECTED';

export type GetGenreList = {
    type: typeof GET_GENRE_LIST,
    genres: Array<Genre>
}

export type GenreSelected = {
    type: typeof GENRE_SELECTED,
    genreId: number
}

export type GenreDispatchTypes = GetGenreList | GenreSelected