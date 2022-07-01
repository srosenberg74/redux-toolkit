import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  comments: [],
};

export const commentSlice = createSlice({
  name: "comments",
  initialState: initialState,
  reducers: {
    addComment(state, action) {
      state.comments = [...state.comments, action.payload];
    },
    deleteComment(state, action) {
      state.comments = state.comments.filter(
        (comment, i) => i !== action.payload
      );
      console.log("comments: ", state.comments, action.payload);
    },
  },
});

export const { addComment, deleteComment } = commentSlice.actions;

export default commentSlice.reducer;
