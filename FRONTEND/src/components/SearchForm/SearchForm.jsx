import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { useFormik } from "formik";
import * as Yup from "yup";

import Input from "../Input";

import { SavePropertiesFiltered, saveSearch } from "../../redux/filter/actions";

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

  const { value } = useSelector((state) => state.filter);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const handleSaveSearch = (newSearch) => {
    console.log(newSearch);
    let filter = `province=${newSearch.Search}`;
    dispatch(saveSearch(newSearch));
    dispatch(SavePropertiesFiltered(filter));
    setHasSubmitted(true);
  };

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
      <div className="container">
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <Input
              type="text"
              label=""
              id="Search"
              value={values.Search}
              placeholder="Search City"
              handleChange={handleChange}
              handleBlur={handleBlur}
              hasErrorMessage={touched.Search}
              errorMessage={errors.Search}
            />
          </form>
          {hasSubmitted &&
            setTimeout(() => {
              navigate(`/dashboard/province=${value.Search}`);
            }, 500)}
        </div>
      </div>
    </>
  );
}
