import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import useReducer from "../feature/user/userSlice";
import movieReducer from "../feature/movies/movieSlice";

export default configureStore({
    reducer: {
        user: useReducer,
        movie: movieReducer,
    },
    Middleware: getDefaultMiddleware({
        serializableCheck: false,
    }),
});