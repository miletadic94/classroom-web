import { GET_NOTEBOOKS, GET_NOTEBOOK } from "../actions/notebookActions";

const initialState = null;

export const notebooksReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_NOTEBOOKS:
      return payload;
    default:
      return state;
  }
};

export const notebookReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_NOTEBOOK:
      return payload;
    default:
      return state;
  }
};
