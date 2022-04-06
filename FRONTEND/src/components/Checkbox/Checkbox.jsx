import React from "react";

function Checkbox({
  type = "text",
  label = "input-01",
  id = "input-01",
  value = "",
  placeholder = "",
  handleChange = () => {},
  handleBlur = () => {},
  errorMessage = "",
  hasErrorMessage = false,
  ...props
}) {
  return (
    <div className="form-group">
      <label className="form-check-label" htmlFor={id}>
        {label}
      </label>
      <input
        className={"form-check-input"}
        id={id}
        name={id}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        onBlur={handleBlur}
        {...props}
      />
    </div>
  );
}

export default Checkbox;
