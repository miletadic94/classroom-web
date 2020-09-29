import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { LOGOUT_ACTION } from "../actions/authActions";
import { history } from "../../store";
import {
  deleteUserId,
  deleteUserToken,
} from "../../services/localStorageService";

import alertReducer from "./alertReducer";
import currentUserReducer from "./currentUserReducer";
import { studentsReducer, studentReducer } from "./studentReducers";
import { booksReducer, bookReducer } from "./bookReducers";
import { notesReducer, noteReducer } from "./noteReducers";
import { notebooksReducer, notebookReducer } from "./notebookReducers";

const appReducer = combineReducers({
  currentUser: currentUserReducer,
  students: studentsReducer,
  student: studentReducer,
  books: booksReducer,
  book: bookReducer,
  notes: notesReducer,
  note: noteReducer,
  notebook: notebookReducer,
  notebooks: notebooksReducer,
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
