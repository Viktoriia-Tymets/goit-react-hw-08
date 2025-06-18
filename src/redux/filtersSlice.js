import { createSlice } from '@reduxjs/toolkit';

export const selectNameFilter = (state) => state.filters.name;


const filtersSlice = createSlice({
    name: 'filters',
    initialState: {
name: ''
    },
    reducers: {
        changeFilter: (state, action) => {
            state.name = action.payload;
        }
    }
})


export default filtersSlice.reducer;
export const { changeFilter } = filtersSlice.actions;