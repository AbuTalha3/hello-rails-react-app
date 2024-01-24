import { combineReducers, configureStore } from "@reduxjs/toolkit";
import greetingSlice from "./greetingSlice";

const reducer = combineReducers({
    greeting: greetingSlice
});

const store = configureStore({
    reducer,
});

export default store;