import { Middleware } from "redux";
import { Genre } from "../../models/Genre";
import { ClearFilter, FilterGenre } from "../actions/AllMusicVideos/AllMusicVideos.action";
import { GENRE_SELECTED, GET_GENRE_LIST } from "../actions/Genre/Genre.types";
import { RootState } from "../store";

const GenreMiddleware: Middleware = store => next => action => {
    const response = next(action);

    const handleGenreSelection = () => {
        const selectedGenres = store.getState().genre.genres.filter((t: Genre) => t.selected);
        if(selectedGenres.length === 0) {
            store.dispatch(ClearFilter());
        } else {
            store.dispatch(FilterGenre(
                selectedGenres.map((t: Genre) => t.id)
            ));
        }
    }

    switch(action.type) {
        case GENRE_SELECTED:
            handleGenreSelection();
        break;
    }

    return response;
}

export default GenreMiddleware;