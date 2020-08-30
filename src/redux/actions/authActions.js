import axios, { BASE_URL } from "../../utils/axios";
import { SET_ALERT } from "./alertActions";
import { history } from "../../store";
import { setUserId, setUserToken } from "../../services/localStorageService";

export const loginAction = (payload) => {
  return (dispatch) => {
    axios
      .post(`${BASE_URL}/login`, payload)
      .then(({ data }) => {
        setUserId(data.user.id);
        setUserToken(data.token);
        history.push("/");
      })
      .catch((error) => {
        // Ovako prikazujes notifikacije
        // Vidi kako ces vracati errore na bekendu
        dispatch({
          type: SET_ALERT,
          payload: {
            title: "ERROR",
            message: error.message,
          },
        });
      });
  };
};

export const LOGOUT_ACTION = "@AUTH/LOGOUT_ACTION";
export const logoutAction = (payload) => ({
  type: LOGOUT_ACTION,
  payload,
});
