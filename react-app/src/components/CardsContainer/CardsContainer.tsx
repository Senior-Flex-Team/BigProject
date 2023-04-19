import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootState, selectBook} from "../../context/store";
import {BookShell} from "../../context/redux-slices/bookSlice";

const CardsContainer = () => {
  const bookShell = useSelector((state: RootState) => state.bookShell)
  const dispatch = useDispatch()
  //create let new BookShell element

  let newBook: BookShell = {
    books: [{id: 'dima', name: "asdasd", author: "asdasdasd"}, {
      id: 'oleg',
      name: "123123asd123123asd",
      author: "a111111sdasdasd"
    }],
    selectedBook: {
      id: "selected",
      name: "selected",
      author: "select"
    }
  }
  console.log(bookShell);
  return (
    <div className="App">
      <span>count</span>
      <button
        aria-label="Decrement value"
        onClick={() => dispatch(selectBook(newBook))}>
        Decrement
      </button>
    </div>
  );
/*

  let arrayOfCards = [];
  return (
    <div>
    </div>
  );*/
};

export default CardsContainer;
