import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useFormik } from "formik";

import filterSchema from "./filterSchema";

import Input from "../Input";
import Checkbox from "../Checkbox";
import Button from "../Button";

const FiltersForm = () => {
  const initValues = {
    air_conditioning: false,
    garden: false,
    lift: false,
    swimming_pool: false,
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
  } = formik;

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Checkbox
          type="checkbox"
          label="Air conditioning"
          id="Air"
          value={values.Air}
          placeholder="Air"
          handleChange={handleChange}
          handleBlur={handleBlur}
          hasErrorMessage={touched.Air}
          errorMessage={errors.Air}
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
