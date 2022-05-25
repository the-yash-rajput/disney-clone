import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
// import { useReducer } from "react";
import  useReducer  from "../feature/user/userSlice";
export default configureStore({
    reducer: {
        user: useReducer
    },
    Middleware: getDefaultMiddleware({
        serializableCheck: false,
    }),
});