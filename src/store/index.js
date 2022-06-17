import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialCounterState = { count: 0, showCounter: true };

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    },
    increase(state, action) {
      state.count = state.count + action.payload;
    },
    decrease(state, action) {
      state.count = state.count - action.payload;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const initialBookState = {
  books: [],
};

const bookSlice = createSlice({
  name: 'book',
  initialState: initialBookState,
  reducers: {
    addNewBook(state, action) {
      state.books = [...state.books, action.payload];
    },
    removeBook(state, action) {
      state.books = state.books.filter((book) => book.id !== action.payload);
    },
  },
});

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    book: bookSlice.reducer,
  },
});

export const counterActions = counterSlice.actions;

export const bookActions = bookSlice.actions;

export default store;
