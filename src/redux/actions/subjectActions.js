import axios, { BASE_URL } from "../../utils/axios";
import { SET_ALERT } from "./alertActions";
import { GET_STUDENTS, GET_STUDENT } from "./studentActions";
import { history } from "../../store";

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
      .post(`${BASE_URL}${PATH}`, data)
      .then((response) => {
        dispatch({
          type: SET_ALERT,
          payload: {
            title: "SUCCESS",
            message: "Sucessfully Created Subject!",
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

export const updateSubjectAction = (id, data) => {
  return (dispatch) => {
    axios
      .put(`${BASE_URL}${PATH}/${id}`, data)
      .then((response) => {
        dispatch({
          type: SET_ALERT,
          payload: {
            title: "SUCCESS",
            message: "Sucessfully Updated Subject!",
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

export const getStudentsOnSubject = (id) => {
  return (dispatch) => {
    axios
      .get(`${BASE_URL}${PATH}/${id}/students`)
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
            message: error.response.data.message,
          },
        });
      });
  };
};

export const getStudentOnSubject = (idSubject, idStudent) => {
  return (dispatch) => {
    axios
      .get(`${BASE_URL}${PATH}/${idSubject}/student/${idStudent}`)
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
            message: error.response.data.message,
          },
        });
      });
  };
};

export const updateStudentOnSubjectAction = (idSubject, idStudent, data) => {
  return (dispatch) => {
    axios
      .put(`${BASE_URL}${PATH}/${idSubject}/student/${idStudent}`, data)
      .then((response) => {
        dispatch({
          type: SET_ALERT,
          payload: {
            title: "SUCCESS",
            message: "Sucessfully Updated Student!",
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
