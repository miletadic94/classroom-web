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
import { isStudent } from "../../services/localStorageService";

const UserProfileForm = ({ handleSubmit, onSubmit }) => {
  const studentRole = isStudent();
  return (
    <form className="user" onSubmit={handleSubmit(onSubmit)}>
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
        name="address"
        type="text"
        placeholder="Your Address"
        component={InputField}
        validate={[required]}
      />
      {studentRole && (
        <Field
          name="phonenumber"
          type="text"
          placeholder="Your Phone Number"
          component={InputField}
          validate={[required]}
        />
      )}
      <Button type="submit" label="Update" />
    </form>
  );
};

export default reduxForm({ form: "userProfileForm" })(UserProfileForm);
