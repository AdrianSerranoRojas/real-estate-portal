import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

import { Formik, Form } from "formik";
import filterSchema from "./filterSchema";

import SelectFieldMulty from "../SelectFieldMulty/SelectFieldMulty";
import SelectField from "../SelectField/SelectField";

import { SavePropertiesFiltered, saveSearch } from "../../redux/filter/actions";

const FiltersForm = () => {
  const optionsPrice_gte = [
    { value: "50000", label: "50 000" },
    { value: "100000", label: "100 000" },
    { value: "150000", label: "150 000" },
    { value: "200000", label: "200 000" },
    { value: "250000", label: "250 000" },
  ];
  const optionsPrice_lte = [
    { value: "50000", label: "50 000" },
    { value: "100000", label: "100 000" },
    { value: "150000", label: "150 000" },
    { value: "200000", label: "200 000" },
    { value: "250000", label: "250 000" },
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
  //GET URL PARAMS AS OBJECT
  const paramsString = useParams();
  let URLparams = new URLSearchParams(paramsString.params);
  function paramsToObject(entries) {
    const result = {};
    for (const [key, value] of entries) {
      // each 'entry' is a [key, value] tupple
      result[key] = value;
    }
    return result;
  }
  const params = paramsToObject(URLparams);

  console.log("URLparams", params);
  //GET URL PARAMS AS OBJECT

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

  const navigate = useNavigate();
  const { value } = useSelector((state) => state.filter);

  useEffect(() => {
    dispatch(saveSearch(URLparams.get("province")));
    dispatch(SavePropertiesFiltered(paramsString.params));
  }, [paramsString.params]);

  const handleSaveFiltersString = (values) => {
    let string = `&province=${value}`;
    if (values.baths) {
      values.baths.forEach((element) => {
        string += `&bath=${element.value}`;
      });
    }
    if (values.conditions) {
      values.conditions.forEach((element) => {
        string += `&condition=${element.value}`;
      });
    }
    if (values.extras) {
      values.extras.forEach((element) => {
        if (element.value.garden == true) string += `&garden=true`;
        if (element.value.air == true) string += `&air_conditioning=true`;
        if (element.value.pet == true) string += `&pet=true`;
      });
    }
    if (values.price_gte.value) {
      string += `&price_gte=${values.price_gte.value}`;
    }
    if (values.price_lte.value) {
      string += `&price_lte=${values.price_lte.value}`;
    }
    if (values.rooms) {
      values.rooms.forEach((element) => {
        string += `&room=${element.value}`;
      });
    }
    if (values.status) {
      values.status.forEach((element) => {
        string += `&status=${element.value}`;
      });
    }
    if (values.types) {
      values.types.forEach((element) => {
        string += `&types=${element.value}`;
      });
    }
    return string;
  };

  const handleSubmit = (values) => {
    const filterString = handleSaveFiltersString(values);
    console.log("Filters", values);
    navigate(`/dashboard/${filterString}`);
  };

  const [hasSubmitted, setHasSubmitted] = useState(false);

  return (
    <>
      <div className="container">
        <div className="form-container">
          <Formik
            onSubmit={handleSubmit}
            initialValues={initValues}
            validationSchema={filterSchema}
          >
            {({ submitForm }) => (
              <Form>
                <SelectField
                  name="price_gte"
                  options={optionsPrice_gte}
                  submitForm={submitForm}
                  placeholder={"min prize"}
                />
                <SelectField
                  name="price_lte"
                  options={optionsPrice_lte}
                  submitForm={submitForm}
                  placeholder={"max prize"}
                />
                <SelectFieldMulty
                  name="rooms"
                  options={optionsRooms}
                  submitForm={submitForm}
                />
                <SelectFieldMulty
                  name="baths"
                  options={optionsBaths}
                  submitForm={submitForm}
                />
                <SelectFieldMulty
                  name="conditions"
                  options={optionsConditions}
                  submitForm={submitForm}
                />
                <SelectFieldMulty
                  name="status"
                  options={optionsStatus}
                  submitForm={submitForm}
                />
                <SelectFieldMulty
                  name="type"
                  options={optionsType}
                  submitForm={submitForm}
                />
                <SelectFieldMulty
                  name="extras"
                  options={optionsExtras}
                  submitForm={submitForm}
                />
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default FiltersForm;
