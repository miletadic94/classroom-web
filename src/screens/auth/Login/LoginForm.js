import React from "react";
import { reduxForm, Field } from "redux-form";
import InputField from "../../../components/formFields/InputField";
import Button from "../../../components/Button";
import { required } from "../../../utils/validations";

const LoginForm = ({ handleSubmit, onSubmit }) => {
  return (
    <form className="user" onSubmit={handleSubmit(onSubmit)}>
      <Field
        name="username"
        type="text"
        placeholder="Please Enter Your Username"
        component={InputField}
        validate={[required]}
      />
      <Field
        name="password"
        type="password"
        placeholder="Please Enter Your Password"
        component={InputField}
        validate={[required]}
      />
      <Button type="submit" label="Login" />
    </form>
  );
};

export default reduxForm({ form: "loginForm" })(LoginForm);
