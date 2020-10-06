import React from "react";

const Button = ({ type, label }) => {
  return (
    <button className="btn btn-primary btn-user btn-block" type={type}>
      {label}
    </button>
  );
};

export default Button;
