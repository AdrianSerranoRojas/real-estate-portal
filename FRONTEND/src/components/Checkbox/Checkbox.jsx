import React from "react";

function Checkbox({
  type = "text",
  label = "input-01",
  id = "input-01",
  value = "",
  placeholder = "",
  handleChange = () => {},
  handleSubmit = () => {},
  handleBlur = () => {},
  errorMessage = "",
  hasErrorMessage = false,
  submitForm = () => {},
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
        onChange={(event) => { handleChange(event), submitForm()}}
        onBlur={handleBlur}
        {...props}
      />
    </div>
  );
}

export default Checkbox;
