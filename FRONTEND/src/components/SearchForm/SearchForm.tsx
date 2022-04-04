import React, {Component, useState} from "react";
import { useNavigate } from "react-router-dom";
import { withFormik, FormikProps } from "formik";
import { useFormik, Field } from "formik";

import Input from "../Input";
import Button from "../Button";
import * as Yup from "yup";

const searchSchema = Yup.object().shape({
    Search: Yup.string()
    .min(2, "the search is too short")
    .max(10, "too long")
    .required("The search is required")
})

    type FormValues = {
        Search: string;
    }

    const initValues: FormValues ={
        Search:""
    }

export default function SearchForm(){
    const [hasSubmitted, setHasSubmitted] = useState(false);

    const navigate = useNavigate()


    const formik = useFormik<FormValues>({
            initialValues:initValues,
            validationSchema:searchSchema,
            onSubmit:(values , {setSubmitting}) =>{
                saveSearch(values)
                setSubmitting(true)
                setTimeout(() => {
                setHasSubmitted(true);
            }, 500);
        }
    })

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
          handleChange = { () => handleChange}
          handleBlur = { () => handleBlur}
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

      {hasSubmitted &&  navigate("/Home") }
    </>
  );
}
