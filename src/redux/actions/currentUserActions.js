import { isStudent } from "../../services/localStorageService";
import axios, { BASE_URL } from "../../utils/axios";
import { SET_ALERT } from "./alertActions";

export const GET_CURRENT_USER = "@USR/GET_CURRENT_USER";

export const getCurrentUserAction = (id) => {
  return (dispatch) => {
    const PATH = isStudent ? "/student" : "/professor";
    axios
      .get(`${BASE_URL}/${PATH}/${id}`)
      .then((response) => {
        dispatch({
          type: GET_CURRENT_USER,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: SET_ALERT,
          payload: {
            title: "ERROR",
            message: error.message,
          },
        });
        dispatch({
          type: GET_CURRENT_USER,
          payload: null,
        });
      });
  };
};
