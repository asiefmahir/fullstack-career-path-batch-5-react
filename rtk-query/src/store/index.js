import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import {noteApi} from './api/notes'

export const store = configureStore({
    reducer: {
        [noteApi.reducerPath]: noteApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(noteApi.middleware),
})
