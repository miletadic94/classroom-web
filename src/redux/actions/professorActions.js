import axios, { BASE_URL } from "../../utils/axios";
import { SET_ALERT } from "./alertActions";

const PATH = "/professor";

export const updateProfesorAction = (id, data) => {
  return (dispatch) => {
    axios
      .put(`${BASE_URL}${PATH}/${id}`, data)
      .then((response) => {
        dispatch({
          type: SET_ALERT,
          payload: {
            title: "SUCCESS",
            message: "Sucessfully Updated!",
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: SET_ALERT,
          payload: {
            title: "ERROR",
            message: error.response.data.message,
          },
        });
      });
  };
};
