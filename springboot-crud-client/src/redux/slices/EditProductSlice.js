import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//dispatcher
export const editProductById = createAsyncThunk('editProductThunk', async (params) => {
    try {
        await axios.put(`http://localhost:9191/edit/${params.id}`, params.formData);
    } catch (error) {
        return error;
    }
})

//slice
export const editProductByIdSlice = createSlice({
    name: 'editProductSlice',
    initialState: {
        status: 'idle',
        error: null
    },
    extraReducers: {
        [editProductById.pending]: (state, action) => {
            state.status = 'loading';
            state.error = null;
        },
        [editProductById.fulfilled]: (state, action) => {
            state.status = 'success';
            state.error = null;
        },
        [editProductById.rejected]: (state, action) => {
            state.status = 'fail';
            state.error = 'error';
        },
    }
})

export default editProductByIdSlice.reducer;