import { combineReducers } from "redux";

import AllMusicVideosReducer from "./AllMusicVideos.reducer";
import GenreReducer from "./Genre.reducer";

const RootReducer = combineReducers({
    allMusicVideos: AllMusicVideosReducer,
    genre: GenreReducer
})

export default RootReducer;