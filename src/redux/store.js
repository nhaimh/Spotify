import { configureStore } from "@reduxjs/toolkit";
import { SongSlice } from "./Silce/SongSlice";
import { SongsSlice } from "./Silce/SongsSlice";

export const store = configureStore({
    reducer: {
        songs: SongsSlice.reducer,
        song: SongSlice.reducer,

    },
})