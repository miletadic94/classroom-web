import React from "react";
import { reduxForm, Field } from "redux-form";
import InputField from "../../components/formFields/InputField";
import Button from "../../components/Button";
import {
  required,
  emailValidation,
  minLength6,
  maxLength32,
  maxLength128,
} from "../../utils/validations";

const UserProfileForm = ({ handleSubmit, onSubmit }) => {
  return (
    <form class="user" onSubmit={handleSubmit(onSubmit)}>
      <Field
        name="name"
        type="text"
        placeholder="Your Name"
        component={InputField}
        validate={[required]}
      />
      <Field
        name="surname"
        type="text"
        placeholder="Your Surname"
        component={InputField}
        validate={[required]}
      />
      <Field
        name="jmbg"
        type="text"
        placeholder="Your ID"
        component={InputField}
        validate={[required]}
      />
      <Field
        name="address"
        type="text"
        placeholder="Your Address"
        component={InputField}
        validate={[required]}
      />
      <Field
        name="phonenumber"
        type="text"
        placeholder="Your Phone Number"
        component={InputField}
        validate={[required]}
      />
      <Button type="submit" label="Update" />
    </form>
  );
};

export default reduxForm({ form: "userProfileForm" })(UserProfileForm);
