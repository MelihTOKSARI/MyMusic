import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

import RootReducer from "./reducers/Root.reducer";

const store = configureStore({
    reducer: RootReducer,
    middleware: [thunk]
})

export type RootState = ReturnType<typeof store.getState>
export default store;