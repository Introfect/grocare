import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const videoSlice = createSlice({
  name: "video",
  initialState,
  reducers: {
    addToVideo: (state, action) => {
        state.items=[action.payload]
    },
    removeFromBoard: (state, action) => {},
  },
});

export const { addToVideo, removeFromVideo } = videoSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectVideo = (state) =>{
    return state.video.items;
}

export default videoSlice.reducer;