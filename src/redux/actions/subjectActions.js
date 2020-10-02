import axios, { BASE_URL } from "../../utils/axios";
import { SET_ALERT } from "./alertActions";

export const GET_SUBJECTS = "@SBJ/GET_SUBJECTS";
export const GET_SUBJECT = "@SBJ/GET_SUBJECT";

const PATH = "/subject";

export const getSubjectsAction = (subjectName) => {
  return (dispatch) => {
    const URL = `${BASE_URL}${
      subjectName ? `${PATH}?subjectname=${subjectName}` : "/subjects"
    }`;
    axios
      .get(URL)
      .then((response) => {
        dispatch({
          type: GET_SUBJECTS,
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
          type: GET_SUBJECTS,
          payload: null,
        });
      });
  };
};

export const getSubjectAction = (id) => {
  return (dispatch) => {
    axios
      .get(`${BASE_URL}${PATH}/${id}`)
      .then((response) => {
        dispatch({
          type: GET_SUBJECT,
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
          type: GET_SUBJECT,
          payload: null,
        });
      });
  };
};

export const createSubjectAction = (data) => {
  return (dispatch) => {
    axios
      .post(`${BASE_URL}${PATH}`, JSON.stringify(data))
      .then((response) => {
        dispatch({
          type: SET_ALERT,
          payload: {
            title: "SUCCESS",
            message: "Sucessfully Created Subject!",
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

export const updateSubjectAction = (id, data) => {
  return (dispatch) => {
    axios
      .put(`${BASE_URL}${PATH}/${id}`, JSON.stringify(data))
      .then((response) => {
        dispatch({
          type: SET_ALERT,
          payload: {
            title: "SUCCESS",
            message: "Sucessfully Updated Subject!",
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
