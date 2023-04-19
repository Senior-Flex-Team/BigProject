import {createSlice, PayloadAction} from "@reduxjs/toolkit"

export interface Book {
  id: string,
  name: string,
  author: string
}

export interface BookShell {
  books: Book[],
  selectedBook: Book | null
}

//rewrite Books interface using typescript
const initialState: BookShell = {
  books: [],
  selectedBook: null
}

export let bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    selectBook: (state, action:PayloadAction<BookShell>) => {
      return {...action.payload};
    },
  }
});

