import { isStudent } from "../../services/localStorageService";
import axios, { BASE_URL } from "../../utils/axios";
import { SET_ALERT } from "./alertActions";
import { getRoleId } from "../../services/localStorageService";

export const GET_CURRENT_USER = "@USR/GET_CURRENT_USER";

export const getCurrentUserAction = () => {
  return (dispatch) => {
    const PATH = isStudent() ? "student" : "professor";
    const userId = getRoleId();
    axios
      .get(`${BASE_URL}/${PATH}/${userId}`)
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
