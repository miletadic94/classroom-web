import { GET_CURRENT_USER } from "../actions/currentUserActions";

const initialState = null;

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_CURRENT_USER:
      return payload;
    default:
      return state;
  }
};
