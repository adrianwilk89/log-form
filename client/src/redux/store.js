import {
    configureStore
} from '@reduxjs/toolkit';

import sliceReducer from './logs/logsSlice'

export const store = configureStore({
    reducer: {
        logs: sliceReducer,
    }
})