import React from "react";

const CheckboxField = ({
  input,
  value,
  label,
  checked,
  disabled,
  onChange,
}) => {
  return (
    <div>
      <input
        {...input}
        id={value}
        name={value}
        type="checkbox"
        disabled={disabled}
        defaultChecked={checked}
        onChange={onChange}
      />
      <label className="ml-2" htmlFor={value}>
        {label}
      </label>
    </div>
  );
};

export default CheckboxField;
