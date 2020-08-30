import React from "react";
import { Label, Form } from "semantic-ui-react";

const InputField = ({
  input,
  type,
  name,
  label,
  placeholder,
  meta: { error, warning, touched },
}) => {
  return (
    <div>
      <label>{label}</label>
      <input {...input} name={name} type={type} placeholder={placeholder} />
      {touched && error && (
        <Label basic color="red" pointing>
          {error}
        </Label>
      )}
    </div>
  );
};

export default InputField;
