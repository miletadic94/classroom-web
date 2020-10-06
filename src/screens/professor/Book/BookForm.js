import React from "react";
import { reduxForm, Field } from "redux-form";
import InputField from "../../../components/formFields/InputField";
import TextAreaField from "../../../components/formFields/TextAreaField";
import Button from "../../../components/Button";
import { required } from "../../../utils/validations";
import CheckboxField from "../../../components/formFields/CheckboxField";

const BookForm = ({ handleSubmit, onSubmit }) => {
  return (
    <form className="user" onSubmit={handleSubmit(onSubmit)}>
      <Field
        name="name"
        type="text"
        placeholder="Book Title"
        component={InputField}
        validate={[required]}
      />
      <Field
        name="author"
        type="text"
        placeholder="Authors Name"
        component={InputField}
        validate={[required]}
      />
      <Field
        name="description"
        type="text"
        placeholder="Books Description"
        component={TextAreaField}
        validate={[required]}
      />
      <Field
        name="publisher"
        type="text"
        placeholder="Book Publisher"
        component={InputField}
        validate={[required]}
      />
      <Field name="isdeleted" label="Delete ?" component={CheckboxField} />
      <Button type="submit" label="Submit" />
    </form>
  );
};

export default reduxForm({ form: "bookForm" })(BookForm);
