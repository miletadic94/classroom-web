import { GET_BOOKS, GET_BOOK } from "../actions/bookActions";

const initialState = null;

export const booksReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_BOOKS:
      return payload;
    default:
      return state;
  }
};

export const bookReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_BOOK:
      return payload;
    default:
      return state;
  }
};
