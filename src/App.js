import React, { Fragment } from "react";
import { Router, Switch, Route, Redirect } from "react-router-dom";
import { history } from "./store";

import Layout from "./components/Layout";

import Login from "./screens/auth/Login";
import Regiser from "./screens/auth/Register";
import ForgotPassword from "./screens/auth/ForgotPassword";
import ResetPassword from "./screens/auth/ResetPassword";

import Home from "./screens/Home";
import UserProfile from "./screens/UserProfile";

// import UserManagement from "./screens/profesor/UserManagement";
// import CreateUser from "./screens/profesor/UserManagement/CreateUser";
// import EditUser from "./screens/profesor/UserManagement/EditUser";

import { getUserToken } from "./services/localStorageService";
import Alert from "./components/Alert";
import Subjects from "./screens/Subjects";
import MySubjects from "./screens/MySubjects";
import SingleSubject from "./screens/SingleSubject";

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
        <Route path="/forgot-password" component={ForgotPassword} />
        <Route path="/reset-password/:tokenId" component={ResetPassword} />
        <AuthRoute path="/" component={Home} exact />
        <AuthRoute path="/user-profile" component={UserProfile} />
        <AuthRoute path="/subjects" component={Subjects} />
        <AuthRoute path="/my-subjects" component={MySubjects} />
        <AuthRoute path="/subject/:id" component={SingleSubject} />
      </Switch>
      <Alert />
    </Router>
  );
};

export default App;
