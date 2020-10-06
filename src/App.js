import React, { Fragment } from "react";
import { Router, Switch, Route, Redirect } from "react-router-dom";
import { history } from "./store";

import { getUserToken } from "./services/localStorageService";

import Layout from "./components/Layout";

import Login from "./screens/auth/Login";
import Regiser from "./screens/auth/Register";

import Home from "./screens/Home";
import UserProfile from "./screens/UserProfile";

import Alert from "./components/Alert";
import Subjects from "./screens/Subjects";
import MySubjects from "./screens/MySubjects";
import SingleSubject from "./screens/SingleSubject";
import CreateSubject from "./screens/professor/Subject/CreateSubject";
import EditSubject from "./screens/professor/Subject/EditSubject";
import CreateBook from "./screens/professor/Book/CreateBook";
import EditBook from "./screens/professor/Book/EditBook";
import CreateNotebook from "./screens/professor/Notebook/CreateNotebook";
import EditNotebook from "./screens/professor/Notebook/EditNotebook";
import CreateNote from "./screens/professor/Note/CreateNote";
import EditNote from "./screens/professor/Note/EditNote";
import StudentsOnSubject from "./screens/professor/Subject/Students/StudentsOnSubject";
import EditStudentOnSubject from "./screens/professor/Subject/Students/EditStudentOnSubject";

const AuthRoute = ({ path, component, exact }) => {
  const token = getUserToken();
  if (token) {
    return (
      <Fragment>
        <Layout />
        <Route path={path} component={component} exact={exact} />
      </Fragment>
    );
  }
  return <Redirect to="/login" />;
};

const App = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Regiser} />
        <AuthRoute path="/" component={Home} exact />
        <AuthRoute path="/user-profile" component={UserProfile} />
        <AuthRoute path="/subjects" component={Subjects} />
        <AuthRoute path="/my-subjects" component={MySubjects} />
        <AuthRoute path="/subject/create" component={CreateSubject} exact />
        <AuthRoute path="/subject/edit/:id" component={EditSubject} exact />
        <AuthRoute
          path="/subject/:subjectId/add-book"
          component={CreateBook}
          exact
        />
        <AuthRoute
          path="/subject/:subjectId/edit-book/:id"
          component={EditBook}
          exact
        />
        <AuthRoute
          path="/subject/:subjectId/add-notebook"
          component={CreateNotebook}
          exact
        />
        <AuthRoute
          path="/subject/:subjectId/edit-notebook/:id"
          component={EditNotebook}
          exact
        />
        <AuthRoute
          path="/subject/:subjectId/add-note"
          component={CreateNote}
          exact
        />
        <AuthRoute
          path="/subject/:subjectId/edit-note/:id"
          component={EditNote}
          exact
        />
        <AuthRoute
          path="/subject/:subjectId/students"
          component={StudentsOnSubject}
          exact
        />

        <AuthRoute
          path="/subject/:subjectId/edit-student/:studentId"
          component={EditStudentOnSubject}
          exact
        />
        <AuthRoute path="/subject/:id" component={SingleSubject} />
      </Switch>
      <Alert />
    </Router>
  );
};

export default App;
