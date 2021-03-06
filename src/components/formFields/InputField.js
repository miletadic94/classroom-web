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
    <div className="form-group">
      {label && <label htmlFor={name}>{label}</label>}
      <input
        {...input}
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="form-control form-control-user"
      />
      {touched && error && (
        <Label basic color="red" pointing>
          {error}
        </Label>
      )}
    </div>
  );
};

export default InputField;
