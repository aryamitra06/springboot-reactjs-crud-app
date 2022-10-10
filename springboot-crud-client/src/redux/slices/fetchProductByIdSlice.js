import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//dispatcher
export const getProductById = createAsyncThunk('fetchProductByIdThunk', async (id) => {
    try {
        const response = await axios.get(`http://localhost:9191/product/${id}`);
        return response.data;
    } catch (error) {
        return error;
    }
})

//slice
export const getProductByIdSlice = createSlice({
    name: 'fetchProductByIdSlice',
    initialState: {
        data: [],
        status: 'idle',
        error: null
    },
    extraReducers: {
        [getProductById.pending]: (state, action) => {
            state.data = [];
            state.status = 'loading';
            state.error = null;
        },
        [getProductById.fulfilled]: (state, action) => {
            state.data = action.payload;
            state.status = 'success';
            state.error = null;
        },
        [getProductById.rejected]: (state, action) => {
            state.data = [];
            state.status = 'fail';
            state.error = 'error';
        },
    }
})

export default getProductByIdSlice.reducer;