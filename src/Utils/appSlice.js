import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    modalVisible: false,
    screen: "home",
};

export const appSlice = createSlice({
    name: "data",
    initialState: initialState,
    reducers: {
        setScreen(state, action) {
            state.screen = action.payload;
        },
        setModalVisible(state, action) {
            state.modalVisible = action.payload;
        }
    }
});

export const { setScreen, setModalVisible } = appSlice.actions;

export default appSlice.reducer;