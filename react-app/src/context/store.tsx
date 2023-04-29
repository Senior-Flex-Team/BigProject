import { configureStore } from '@reduxjs/toolkit';

import { setupListeners } from '@reduxjs/toolkit/query';

import { counterReducer } from './redux-slices/counter-slice';
import { cardsApi } from './api-slices/cards-api';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        [cardsApi.reducerPath]: cardsApi.reducer,
    },
    middleware: (getDefaultMiddleware) => [
        ...getDefaultMiddleware(),
        cardsApi.middleware,
    ],
});
setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
