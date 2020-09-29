import { GET_SUBJECTS, GET_SUBJECT } from "../actions/subjectActions";

const initialState = null;

export const subjectsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_SUBJECTS:
      return payload;
    default:
      return state;
  }
};

export const subjectReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_SUBJECT:
      return payload;
    default:
      return state;
  }
};
