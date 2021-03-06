import axios, { BASE_URL } from "../../utils/axios";
import { SET_ALERT } from "./alertActions";
import { history } from "../../store";

export const GET_NOTES = "@NTS/GET_NOTES";
export const GET_NOTE = "@NTS/GET_NOTE";

const PATH = "/note";

export const getNotesAction = () => {
  return (dispatch) => {
    axios
      .get(`${BASE_URL}${PATH}`)
      .then((response) => {
        dispatch({
          type: GET_NOTES,
          payload: response.data,
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
        dispatch({
          type: GET_NOTES,
          payload: null,
        });
      });
  };
};

export const getNoteAction = (id) => {
  return (dispatch) => {
    axios
      .get(`${BASE_URL}${PATH}/${id}`)
      .then((response) => {
        dispatch({
          type: GET_NOTE,
          payload: response.data,
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
        dispatch({
          type: GET_NOTE,
          payload: null,
        });
      });
  };
};

export const createNoteAction = (data) => {
  return (dispatch) => {
    axios
      .post(`${BASE_URL}${PATH}`, data)
      .then((response) => {
        dispatch({
          type: SET_ALERT,
          payload: {
            title: "SUCCESS",
            message: "Sucessfully Created Note!",
          },
        });
        history.goBack();
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

export const updateNoteAction = (id, data) => {
  return (dispatch) => {
    axios
      .put(`${BASE_URL}${PATH}/${id}`, data)
      .then((response) => {
        dispatch({
          type: SET_ALERT,
          payload: {
            title: "SUCCESS",
            message: "Sucessfully Updated Note!",
          },
        });
        history.goBack();
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
