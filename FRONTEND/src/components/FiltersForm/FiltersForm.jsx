import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Formik, Form, Field } from "formik";

import filterSchema from "./filterSchema";

import Input from "../Input";
import Checkbox from "../Checkbox";
import Button from "../Button";
import SelectFieldMulty from "../SelectFieldMulty/SelectFieldMulty";
import SelectField from "../SelectField/SelectField";

const FiltersForm = () => {
  const optionsPrice_gte = [
    { value: "50 000", label: "50 000" },
    { value: "100 000", label: "100 000" },
    { value: "150 000", label: "150 000" },
    { value: "200 000", label: "200 000" },
    { value: "250 000", label: "250 000" },
  ];

  const optionsPrice_lte = [
    { value: "50 000", label: "50 000" },
    { value: "100 000", label: "100 000" },
    { value: "150 000", label: "150 000" },
    { value: "200 000", label: "200 000" },
    { value: "250 000", label: "250 000" },
  ];

  const optionsRooms = [
    { value: 0, label: "Loft" },
    { value: 1, label: "Un dormitorio" },
    { value: 2, label: "Dos dormitorios" },
    { value: 3, label: "Tres dormitorios" },
    { value: 4, label: "Cuatro dormitorios" },
  ];

  const optionsBaths = [
    { value: 1, label: "One bathroom" },
    { value: 2, label: "Two bathrooms" },
    { value: 3, label: "Thre bathrooms" },
  ];

  const optionsConditions = [
    { value: "new", label: "new" },
    { value: "Old", label: "Old" },
  ];

  const optionsStatus = [
    { value: "available", label: "available" },
    { value: "not available", label: "not available" },
  ];

  const optionsType = [
    { value: "Penhause", label: "Penhause" },
    { value: "flat/apartment", label: "flat/apartment" },
    { value: "Hause", label: "Hause" },
  ];

  const optionsExtras = [
    { value: { air: true }, label: "air" },
    { value: { garden: true }, label: "garden" },
    { value: { pet: true }, label: "pet" },
  ];

  const initValues = {
    price_gte: [],
    price_lte: [],
    rooms: [],
    baths: [],
    conditions: [],
    status: [],
    type: [],
    extras: [],
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
              submitForm,
            }) => (
              <Form>
                <SelectField
                  name="price_gte"
                  options={optionsPrice_gte}
                  submitForm={submitForm}
                />
                <SelectField
                  name="price_lte"
                  options={optionsPrice_lte}
                  submitForm={submitForm}
                />
                <SelectFieldMulty name="rooms" options={optionsRooms} />
                <SelectFieldMulty name="baths" options={optionsBaths} />
                <SelectFieldMulty
                  name="conditions"
                  options={optionsConditions}
                />
                <SelectFieldMulty name="status" options={optionsStatus} />
                <SelectFieldMulty name="type" options={optionsType} />
                <SelectFieldMulty name="extras" options={optionsExtras} />

                {/* <Checkbox
                  type="checkbox"
                  label="Garden"
                  id="garden"
                  placeholder="garden"
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  hasErrorMessage={touched.garden}
                  errorMessage={errors.garden}
                  submitForm={submitForm}
                /> */}
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
