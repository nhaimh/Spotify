import { createSlice } from "@reduxjs/toolkit";
import data from "../../data/songs.json";

export const SongsSlice = createSlice({
  name: "songs",
  initialState: {
    songs: [],
    idSong: "",
  },
  reducers: {
    getListSong: (state, action) => {
      state.songs = data;
    },
  },
});

export const { getListSong } = SongsSlice.actions;
export const songsSelector = (state) => state.songs;
