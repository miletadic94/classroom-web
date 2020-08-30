import React from "react";
import { reduxForm, Field } from "redux-form";
import { Button, Checkbox, Form } from "semantic-ui-react";
import InputField from "../../../components/formFields/InputField";
import {
  required,
  emailValidation,
  minLength6,
  maxLength32,
  maxLength128,
} from "../../../utils/validations";

const Login = ({ handleSubmit, onSubmit }) => {
  return (
    <form
      style={{ width: "100%" }}
      className="ui form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Field
        name="email"
        type="email"
        label="Please Enter Your Email"
        component={InputField}
        validate={[required]}
      />
      <Field
        name="password"
        type="password"
        label="Please Enter Your Password"
        component={InputField}
        validate={[required]}
      />
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default reduxForm({ form: "loginForm" })(Login);
