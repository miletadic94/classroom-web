import axios, { BASE_URL } from "../../utils/axios";
import { SET_ALERT } from "./alertActions";

export const GET_NOTEBOOKS = "@NBK/GET_NOTEBOOKS";
export const GET_NOTEBOOK = "@NBK/GET_NOTEBOOK";

const PATH = "/notebook";

export const getNotebooksAction = () => {
  return (dispatch) => {
    axios
      .get(`${BASE_URL}/${PATH}`)
      .then((response) => {
        dispatch({
          type: GET_NOTEBOOKS,
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
          type: GET_NOTEBOOKS,
          payload: null,
        });
      });
  };
};

export const getNotebookAction = (id) => {
  return (dispatch) => {
    axios
      .get(`${BASE_URL}/${PATH}/${id}`)
      .then((response) => {
        dispatch({
          type: GET_NOTEBOOK,
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
          type: GET_NOTEBOOK,
          payload: null,
        });
      });
  };
};

export const createNotebookAction = (data) => {
  return (dispatch) => {
    axios
      .post(`${BASE_URL}/${PATH}`, JSON.stringify(data))
      .then((response) => {
        dispatch({
          type: SET_ALERT,
          payload: {
            title: "SUCCES",
            message: "Sucessfully Created Notebook!",
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

export const updateNotebookAction = (id, data) => {
  return (dispatch) => {
    axios
      .post(`${BASE_URL}/${PATH}/${id}`, JSON.stringify(data))
      .then((response) => {
        dispatch({
          type: SET_ALERT,
          payload: {
            title: "SUCCES",
            message: "Sucessfully Updated Notebook!",
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
