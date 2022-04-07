import * as Yup from "yup";

const searchSchema = Yup.object().shape({
  air_conditioning: Yup.boolean(),
  garden: Yup.boolean(),
  // lift: Yup.boolean(),
  swimming_pool: Yup.boolean(),
  // name: Yup.object({
  //   label: Yup.string().required(),
  //   value: Yup.string().required("Name is a required field"),
  // }),
  // terrace: Yup.boolean(),
  // pet: Yup.boolean(),

  // type: Yup.string(),
  // size: Yup.string(),
  // condition: Yup.string(),
  // status: Yup.string(),

  // bath: Yup.number(),
  // room: Yup.number(),
  // prize: Yup.number(),
});

export default searchSchema;
