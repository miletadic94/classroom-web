import { GET_NOTES, GET_NOTE } from "../actions/noteActions";

const initialState = null;

export const notesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_NOTES:
      return payload;
    default:
      return state;
  }
};

export const noteReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_NOTE:
      return payload;
    default:
      return state;
  }
};
