import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {genreService} from "../../services";

const initialState = {
    genres: [],
    ids: [],
};

const getGenres = createAsyncThunk(
    'genreSlice/getGenres',
    async () => {
        const {data} = await genreService.getGenres();
        return data;
    }
);

const genreSlice = createSlice({
    name: "genreSlice",
    initialState,
    reducers: {
        addId: (state, action) => {
            state.ids.push(action.payload);
        },
        deleteId: (state, action) => {
            const index = state.ids.indexOf(action.payload);
            state.ids.splice(index, 1);
        },
        reset: state => {
            state.ids = [];
        }
    },
    extraReducers: (builder => {
        builder
            .addCase(getGenres.fulfilled, ((state, action) => {
                state.genres = action.payload.genres;
        }))
    })
});

const {reducer: genreReducer, actions: {addId, deleteId, reset}} = genreSlice;
const genreAction = {
    getGenres,
    addId,
    deleteId,
    reset
}

export {genreReducer, genreAction};
