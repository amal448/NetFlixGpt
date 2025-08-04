import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import movieSlice from "./movieSlice";
import gptSlice from "./gptSlice";
import configureLanSlice from "./configureLanSlice";

const appStore=configureStore({
    reducer:{
        user:userSlice,
        movies:movieSlice,
        gpt:gptSlice,
        config: configureLanSlice,
    }
})
export default appStore