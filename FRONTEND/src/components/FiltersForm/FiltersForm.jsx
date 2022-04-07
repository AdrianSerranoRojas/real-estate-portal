import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Formik, Form, Field } from "formik";

import filterSchema from "./filterSchema";

import Input from "../Input";
import Checkbox from "../Checkbox";
import Button from "../Button";
import SelectField from "../SelectField/SelectField";

const FiltersForm = () => {
  const options = [
    { value: "50 000", label: "50 000" },
    { value: "100 000", label: "100 000" },
    { value: "150 000", label: "150 000" },
  ];

  const initValues = {
    name: "",
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
    prizeMin: null,
  };

  const dispatch = useDispatch();

  const { status } = useSelector((state) => state.search);

  // function handleSubmit(values) {
  //   console.log(values);
  //   alert(JSON.stringify(values));
  // }

  // const handleSaveFilters = (){
  //   setHasSubmitted(true);
  // }

  const handleSubmit = (values) => {
    console.log(values);
    handleSaveFilters(values);
  };

  const [hasSubmitted, setHasSubmitted] = useState(false);

  // const formik = useFormik({
  //   initialValues: initValues,
  //   validationSchema: filterSchema,
  //   onSubmit: (values, { setSubmitting }) => {
  //     console.log(values);
  //     handleSaveFilters(values);
  //     setSubmitting(true);
  //   },
  // });
  // const {
  //   values,
  //   errors,
  //   touched,
  //   handleChange,
  //   handleBlur,
  //   handleSubmit,
  //   isSubmitting,
  //   submitForm,
  // } = formik;

  return (
    <>
      <div className="container">
        <div className="form-container">
          <Formik
            onSubmit={handleSubmit}
            initialValues={initValues}
            validationSchema={filterSchema}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              errors,
              values,
              touched,
              isValidating,
              isValid,
              submitForm
            }) => (
              <Form>
                <SelectField name="name" options={options} />
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
                {/* <Checkbox
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
          /> */}
                <Button
                  submitButton
                  block
                  disabled={false}
                  // disabled={formik.isValidating || !formik.isValid}
                >
                  {/* {isSubmitting ? "Submitting..." : "Submit"} */}
                  Submit
                </Button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
      {hasSubmitted && navigate("/dashboard")}
    </>
  );
};

export default FiltersForm;
