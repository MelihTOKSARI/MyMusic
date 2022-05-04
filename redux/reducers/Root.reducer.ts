import { combineReducers } from "redux";

import AllMusicVideosReducer from "./AllMusicVideos.reducer";

const RootReducer = combineReducers({
    allMusicVideos: AllMusicVideosReducer
})

export default RootReducer;