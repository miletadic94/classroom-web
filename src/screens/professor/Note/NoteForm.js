import React from "react";
import { reduxForm, Field } from "redux-form";
import TextAreaField from "../../../components/formFields/TextAreaField";
import Button from "../../../components/Button";
import { required } from "../../../utils/validations";
import CheckboxField from "../../../components/formFields/CheckboxField";

const NoteForm = ({ handleSubmit, onSubmit }) => {
  return (
    <form className="user" onSubmit={handleSubmit(onSubmit)}>
      <Field
        name="text"
        type="text"
        placeholder="Note Description"
        component={TextAreaField}
        validate={[required]}
      />
      <Field name="isdeleted" label="Delete ?" component={CheckboxField} />
      <Button type="submit" label="Submit" />
    </form>
  );
};

export default reduxForm({ form: "noteForm" })(NoteForm);
