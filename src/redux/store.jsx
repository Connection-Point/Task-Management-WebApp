import { configureStore } from '@reduxjs/toolkit';
import boardsSlice from './boardsSlice';

const store = configureStore({
    reducer: {
        // reducers
        boards: boardsSlice.reducer,
    },
});

export default store;