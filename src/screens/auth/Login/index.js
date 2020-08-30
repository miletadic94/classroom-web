import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { Container, Grid } from "semantic-ui-react";

import LoginForm from "./LoginForm";
import { loginAction } from "../../../redux/actions/authActions";

const Login = ({ loginAction }) => {
  const handleSubmit = (data) => {
    console.log("submit", data);
    loginAction(data);
  };
  return (
    <Container>
      <Grid>
        <Grid.Row>
          <h3 className="ui header">Login</h3>
        </Grid.Row>
        <Grid.Row>
          <LoginForm onSubmit={handleSubmit} />
        </Grid.Row>
        <Grid.Row>
          <Link to="/register">Register</Link>
        </Grid.Row>
        <Grid.Row>
          <Link to="/forgot-password">Forgot Password?</Link>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  loginAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
