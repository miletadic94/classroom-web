import { GET_STUDENTS, GET_STUDENT } from "../actions/studentActions";

const initialState = null;

export const studentsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_STUDENTS:
      return payload;
    default:
      return state;
  }
};

export const studentReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_STUDENT:
      return payload;
    default:
      return state;
  }
};
