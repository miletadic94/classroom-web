import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { LOGOUT_ACTION } from "../actions/authActions";
import { history } from "../../store";
import {
  deleteUserId,
  deleteUserToken,
} from "../../services/localStorageService";

import alertReducer from "./alertReducer";

const appReducer = combineReducers({
  alert: alertReducer,
  form: formReducer,
});

export default (state, action) => {
  if (action.type === LOGOUT_ACTION) {
    state.alert = undefined;
    state.form = undefined;
    deleteUserId();
    deleteUserToken();
    history.push("/login");
  }

  return appReducer(state, action);
};
