import axios, { BASE_URL } from "../../utils/axios";
import { SET_ALERT } from "./alertActions";
import { history } from "../../store";

export const GET_NOTEBOOKS = "@NBK/GET_NOTEBOOKS";
export const GET_NOTEBOOK = "@NBK/GET_NOTEBOOK";

const PATH = "/notebook";

export const getNotebooksAction = () => {
  return (dispatch) => {
    axios
      .get(`${BASE_URL}${PATH}`)
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
            message: error.response.data.message,
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
      .get(`${BASE_URL}${PATH}/${id}`)
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
            message: error.response.data.message,
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
      .post(`${BASE_URL}${PATH}`, data)
      .then((response) => {
        dispatch({
          type: SET_ALERT,
          payload: {
            title: "SUCCESS",
            message: "Sucessfully Created Notebook!",
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

export const updateNotebookAction = (id, data) => {
  return (dispatch) => {
    axios
      .put(`${BASE_URL}${PATH}/${id}`, data)
      .then((response) => {
        dispatch({
          type: SET_ALERT,
          payload: {
            title: "SUCCESS",
            message: "Sucessfully Updated Notebook!",
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
