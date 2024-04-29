import { configureStore } from '@reduxjs/toolkit';
import fieldsReducer from './searchFieldsSlice';

export const store = configureStore({
    reducer: {
        fields: fieldsReducer,
    },
    // Add any middleware or enhancers here
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
