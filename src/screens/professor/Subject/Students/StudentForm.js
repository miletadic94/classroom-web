import React from "react";
import { reduxForm, Field } from "redux-form";
import InputField from "../../../../components/formFields/InputField";
import Button from "../../../../components/Button";
import { required } from "../../../../utils/validations";
import CheckboxField from "../../../../components/formFields/CheckboxField";

const StudentForm = ({ handleSubmit, onSubmit }) => {
  return (
    <form className="user" onSubmit={handleSubmit(onSubmit)}>
      <Field
        name="mark"
        type="number"
        label="Grade"
        placeholder="Student Grade"
        component={InputField}
        validate={[required]}
      />
      <Field
        name="points"
        type="number"
        label="Points"
        placeholder="Student Points"
        component={InputField}
        validate={[required]}
      />
      <Field
        name="note"
        type="text"
        label="Note"
        placeholder="Student Note"
        component={InputField}
        validate={[required]}
      />
      <Field name="isdeleted" label="Is Deleted ?" component={CheckboxField} />
      <hr />
      <Button type="submit" label="Submit" />
    </form>
  );
};

export default reduxForm({ form: "studentForm", enableReinitialize: true })(
  StudentForm
);
