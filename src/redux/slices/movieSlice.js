import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {movieService} from "../../services";

const initialState = {
    page: null,
    totalPages: null,
    movies: []
};

const getMovies = createAsyncThunk(
    'movieSlice/getMovies',
    async ({page, genres}) => {
        const {data} = await movieService.getMovies(page, genres);
        return data;
    }
);

const movieSlice = createSlice({
    name:'movieSlice',
    initialState,
    reducers:{},
    extraReducers:(builder => {
        builder
            .addCase(getMovies.fulfilled, ((state, action) => {
                const {page, total_pages:totalPages, results} = action.payload;
                state.page = page;
                state.totalPages = totalPages;
                state.movies = results;
            }))
    })
});

const {reducer: movieReducer} = movieSlice;
const movieActions = {
    getMovies
}

export {movieReducer, movieActions}
