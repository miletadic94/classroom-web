import React from "react";
import { reduxForm, Field } from "redux-form";
import InputField from "../../../components/formFields/InputField";
import TextAreaField from "../../../components/formFields/TextAreaField";
import Button from "../../../components/Button";
import { required } from "../../../utils/validations";
import CheckboxField from "../../../components/formFields/CheckboxField";

const NotebookForm = ({ handleSubmit, onSubmit }) => {
  return (
    <form className="user" onSubmit={handleSubmit(onSubmit)}>
      <Field
        name="name"
        type="text"
        placeholder="Notebook Title"
        component={InputField}
        validate={[required]}
      />
      <Field
        name="description"
        type="text"
        placeholder="Notebooks Description"
        component={TextAreaField}
        validate={[required]}
      />
      <Field name="isdeleted" label="Delete ?" component={CheckboxField} />
      <Button type="submit" label="Submit" />
    </form>
  );
};

export default reduxForm({ form: "notebookForm" })(NotebookForm);
