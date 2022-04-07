import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useFormik } from "formik";

import filterSchema from "./filterSchema";

import Input from "../Input";
import Checkbox from "../Checkbox";
import Button from "../Button";

const FiltersForm = () => {
  const initValues = {
    air: false,
    lift: false,
    garden: false,
    pool: false,
    terrace: false,
    pet: false,

    type: "none",
    size: "none",
    condition: "none",
    status: "none",

    bath: null,
    room: null,
    prize: null,
  };

  const dispatch = useDispatch();

  const { status } = useSelector((state) => state.search);

  // const handleSaveFilters = (){

  //   setHasSubmitted(true);
  // }

  const [hasSubmitted, setHasSubmitted] = useState(false);

  const formik = useFormik({
    initialValues: initValues,
    validationSchema: filterSchema,
    onSubmit: (values, { setSubmitting }) => {
      console.log(values);
      handleSaveFilters(values);
      setSubmitting(true);
    },
  });
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
    submitForm
  } = formik;

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Checkbox
          type="checkbox"
          label="Garden"
          id="garden"
          placeholder="garden"
          handleChange={handleChange}
          handleBlur={handleBlur}
          hasErrorMessage={touched.garden}
          errorMessage={errors.garden}
          submitForm={submitForm}
        />
        <Checkbox
          type="checkbox"
          label="Swimming Pool"
          id="pool"
          value={values.pool}
          placeholder="pool"
          handleChange={handleChange}
          handleBlur={handleBlur}
          hasErrorMessage={touched.pool}
          errorMessage={errors.pool}
          submitForm={submitForm}
        />
        <Checkbox
          type="checkbox"
          label="Air conditioning"
          id="air"
          value={values.air}
          placeholder="air"
          handleChange={handleChange}
          handleBlur={handleBlur}
          hasErrorMessage={touched.air}
          errorMessage={errors.air}
          submitForm={submitForm}
        />
        <Button
          submitButton
          block
          disabled={formik.isValidating || !formik.isValid}
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </Button>
      </form>

      {hasSubmitted && navigate("/dashboard")}
    </>
  );
};

export default FiltersForm;
