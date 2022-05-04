import { combineReducers } from "redux";

import AllMusicVideosReducer from "./AllMusicVideos.reducer";
import DatasetReducer from "./Dataset.reducer";
import GenreReducer from "./Genre.reducer";

const RootReducer = combineReducers({
    allMusicVideos: AllMusicVideosReducer,
    dataset: DatasetReducer,
    genre: GenreReducer
})

export default RootReducer;