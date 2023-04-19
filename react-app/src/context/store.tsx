import {configureStore} from "@reduxjs/toolkit";
import {bookSlice} from "./redux-slices/bookSlice";
import counterReducer, {counterSlice} from "./redux-slices/counterSlice";

const store = configureStore({
  reducer: {
    bookShell: bookSlice.reducer,
    counter: counterReducer
  }
})


export const {increment, incrementByAmount} = counterSlice.actions
export let {selectBook} = bookSlice.actions;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;