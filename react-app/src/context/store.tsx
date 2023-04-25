import {configureStore} from "@reduxjs/toolkit";
import counterReducer from "./redux-slices/counterSlice";
import {cardsApi} from "./api-slices/cardsApi";
import {setupListeners} from "@reduxjs/toolkit/query";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    [cardsApi.reducerPath]: cardsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cardsApi.middleware),
})
setupListeners(store.dispatch)


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;