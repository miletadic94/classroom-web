import React from "react";
import { reduxForm, Field } from "redux-form";
import { Checkbox, Form } from "semantic-ui-react";
import InputField from "../../../components/formFields/InputField";
import Button from "../../../components/Button";
import {
  required,
  emailValidation,
  minLength6,
  maxLength32,
  maxLength128,
} from "../../../utils/validations";

const LoginForm = ({ handleSubmit, onSubmit, ...props }) => {
  return (
    <form class="user" onSubmit={handleSubmit(onSubmit)}>
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
