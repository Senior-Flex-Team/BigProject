import {configureStore} from "@reduxjs/toolkit";
import {cardsFeedSlice} from "./redux-slices/cardsFeedSlice";
import counterReducer, {counterSlice} from "./redux-slices/counterSlice";

const store = configureStore({
  reducer: {
    cardsFeed: cardsFeedSlice.reducer,
    counter: counterReducer
  }
})


export const {increment, incrementByAmount} = counterSlice.actions
export let {TEST_GetAllCards, downloadOther10Cards} = cardsFeedSlice.actions;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;