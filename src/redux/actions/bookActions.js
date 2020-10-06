import axios, { BASE_URL } from "../../utils/axios";
import { SET_ALERT } from "./alertActions";
import { history } from "../../store";

export const GET_BOOKS = "@BKS/GET_BOOKS";
export const GET_BOOK = "@BKS/GET_BOOK";

const PATH = "/book";

export const getBooksAction = () => {
  return (dispatch) => {
    axios
      .get(`${BASE_URL}${PATH}`)
      .then((response) => {
        dispatch({
          type: GET_BOOKS,
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
          type: GET_BOOKS,
          payload: null,
        });
      });
  };
};

export const getBookAction = (id) => {
  return (dispatch) => {
    axios
      .get(`${BASE_URL}${PATH}/${id}`)
      .then((response) => {
        dispatch({
          type: GET_BOOK,
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
          type: GET_BOOK,
          payload: null,
        });
      });
  };
};

export const createBookAction = (data) => {
  return (dispatch) => {
    axios
      .post(`${BASE_URL}${PATH}`, data)
      .then((response) => {
        dispatch({
          type: SET_ALERT,
          payload: {
            title: "SUCCESS",
            message: "Sucessfully Created Book!",
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

export const updateBookAction = (id, data) => {
  return (dispatch) => {
    axios
      .put(`${BASE_URL}${PATH}/${id}`, data)
      .then((response) => {
        dispatch({
          type: SET_ALERT,
          payload: {
            title: "SUCCESS",
            message: "Sucessfully Updated Book!",
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
