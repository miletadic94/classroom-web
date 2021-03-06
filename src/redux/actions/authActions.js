import axios, { BASE_URL } from "../../utils/axios";
import { SET_ALERT } from "./alertActions";
import { history } from "../../store";
import {
  setUserId,
  setRoleId,
  setUserToken,
  setUserRole,
} from "../../services/localStorageService";

export const loginAction = (data) => {
  return (dispatch) => {
    axios
      .post(`${BASE_URL}/login`, data)
      .then(({ data }) => {
        setUserId(data.user_Id);
        setRoleId(data.userId);
        setUserToken(data.token);
        setUserRole(data.userRole);
        history.push("/");
      })
      .catch((error) => {
        // Ovako prikazujes notifikacije
        // Vidi kako ces vracati errore na bekendu
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

export const LOGOUT_ACTION = "@AUTH/LOGOUT_ACTION";
export const logoutAction = (payload) => ({
  type: LOGOUT_ACTION,
  payload,
});
