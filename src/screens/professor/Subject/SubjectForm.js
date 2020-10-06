import React from "react";
import { reduxForm, Field } from "redux-form";
import InputField from "../../../components/formFields/InputField";
import TextAreaField from "../../../components/formFields/TextAreaField";
import Button from "../../../components/Button";
import { required } from "../../../utils/validations";
import CheckboxField from "../../../components/formFields/CheckboxField";

const SubjectForm = ({ handleSubmit, onSubmit }) => {
  return (
    <form className="user" onSubmit={handleSubmit(onSubmit)}>
      <Field
        name="subjectname"
        type="text"
        placeholder="Subject Name"
        component={InputField}
        validate={[required]}
      />
      <Field
        name="description"
        type="text"
        placeholder="Subject Description"
        component={TextAreaField}
        validate={[required]}
      />

      <Field name="ispublic" label="Is public ?" component={CheckboxField} />
      <Field name="isdeleted" label="Delete ?" component={CheckboxField} />
      <br />
      <Button type="submit" label="Submit" />
    </form>
  );
};

export default reduxForm({ form: "subjectForm" })(SubjectForm);
