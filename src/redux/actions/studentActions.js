import axios, { BASE_URL } from "../../utils/axios";
import { SET_ALERT } from "./alertActions";
import { history } from "../../store";

export const GET_STUDENTS = "@STD/GET_STUDENTS";
export const GET_STUDENT = "@STD/GET_STUDENT";

const PATH = "/student";

export const getStudentsAction = () => {
  return (dispatch) => {
    axios
      .get(`${BASE_URL}${PATH}`)
      .then((response) => {
        dispatch({
          type: GET_STUDENTS,
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
          type: GET_STUDENTS,
          payload: null,
        });
      });
  };
};

export const getStudentAction = (id) => {
  return (dispatch) => {
    axios
      .get(`${BASE_URL}${PATH}/${id}`)
      .then((response) => {
        dispatch({
          type: GET_STUDENT,
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
          type: GET_STUDENT,
          payload: null,
        });
      });
  };
};

export const createStudentAction = (data) => {
  return (dispatch) => {
    axios
      .post(`${BASE_URL}${PATH}`, JSON.stringify(data))
      .then((response) => {
        dispatch({
          type: SET_ALERT,
          payload: {
            title: "SUCCES",
            message: "Sucessfully Registered!",
          },
        });
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

export const updateStudentAction = (id, data) => {
  return (dispatch) => {
    axios
      .post(`${BASE_URL}${PATH}/${id}`, JSON.stringify(data))
      .then((response) => {
        dispatch({
          type: SET_ALERT,
          payload: {
            title: "SUCCES",
            message: "Sucessfully Updated!",
          },
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
      });
  };
};
