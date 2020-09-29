export const GET_SUBJECTS = "@SBJ/GET_SUBJECTS";
export const GET_SUBJECT = "@SBJ/GET_SUBJECT";

const PATH = "/subjects";

export const getSubjectsAction = () => {
  return (dispatch) => {
    axios
      .get(`${BASE_URL}/${PATH}`)
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
            message: error.message,
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
      .get(`${BASE_URL}/${PATH}/${id}`)
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
            message: error.message,
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
      .post(`${BASE_URL}/${PATH}`, JSON.stringify(data))
      .then((response) => {
        dispatch({
          type: SET_ALERT,
          payload: {
            title: "SUCCES",
            message: "Sucessfully Created Subject!",
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

export const updateSubjectAction = (id, data) => {
  return (dispatch) => {
    axios
      .post(`${BASE_URL}/${PATH}/${id}`, JSON.stringify(data))
      .then((response) => {
        dispatch({
          type: SET_ALERT,
          payload: {
            title: "SUCCES",
            message: "Sucessfully Updated Subject!",
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
