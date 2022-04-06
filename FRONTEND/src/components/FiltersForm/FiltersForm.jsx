import React,{useState}  from 'react'
import { useDispatch, useSelector } from 'react-redux'


import { useFormik } from 'formik'

import filterSchema from "./filterSchema"

import Input from "../Input"
import Button from "../Button"



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

  const {status, value, responses} = useSelector(state => state.search)

  const handleSaveFilters = (){


    setHasSubmitted(true);
  }

  const [hasSubmitted, setHasSubmitted] = useState(false);

  const formik = useFomik({
    initialValues:initValues,
    validationSchema:filterSchema,
    onSubmit: (values , {setSubmitting})=>{
      handleSaveFilters(values)
      setSubmitting(true)
    }
  })


  return (
    <div>FiltersForm</div>
  )
}

export default FiltersForm