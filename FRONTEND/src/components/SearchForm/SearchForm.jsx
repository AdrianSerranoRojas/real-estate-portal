import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { useFormik } from "formik";

import * as Yup from "yup";

import Input from "../Input";
import Button from "../Button";

import { saveSearch, saveProperties } from "../../redux/search/actions";

const searchSchema = Yup.object().shape({
  Search: Yup.string()
    .min(2, "the search is too short")
    .max(10, "too long")
    .required("The search is required"),
});

const initValues = {
  Search: "",
};

export default function SearchForm() {
  const dispatch = useDispatch();

  const { status, value, responses } = useSelector((state) => state.search);

  const handleSaveSearch = (newSearch) => {
    console.log(newSearch);
    dispatch(saveSearch(newSearch));
    dispatch(saveProperties(newSearch.Search));
    console.log(status);
  };

  useEffect(() => {
    if (status == "ok") {
      setHasSubmitted(true);
    }
  }, [status]);

  console.log(status);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: initValues,
    validationSchema: searchSchema,
    onSubmit: (values, { setSubmitting }) => {
      handleSaveSearch(values);
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
        <Input
          type="text"
          label="Search City"
          id="Search"
          value={values.Search}
          placeholder="Search City"
          handleChange={handleChange}
          handleBlur={handleBlur}
          hasErrorMessage={touched.Search}
          errorMessage={errors.Search}
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
}
