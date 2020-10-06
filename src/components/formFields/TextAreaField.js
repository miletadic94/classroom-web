import React from "react";
import { Label } from "semantic-ui-react";

const TextAraeField = ({
  input,
  name,
  placeholder,
  meta: { error, warning, touched },
}) => {
  return (
    <div className="form-group">
      <textarea
        style={{ width: "100%" }}
        {...input}
        name={name}
        placeholder={placeholder}
        rows={5}
      />
      {touched && error && (
        <Label basic color="red" pointing>
          {error}
        </Label>
      )}
    </div>
  );
};

export default TextAraeField;
