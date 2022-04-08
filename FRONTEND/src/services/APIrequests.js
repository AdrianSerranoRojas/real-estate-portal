import axios from "axios";

export async function getProperties(value) {
  console.log(value);
  var config = {
    method: "get",
    url: `http://localhost:3000/properties?province=${value}`,
    headers: {},
  };
  const result = await axios(config)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
  console.log(result);
  return result;
}

export async function getPropertiesFiltered(value) {
  console.log(value);
  var config = {
    method: "get",
    url: `http://localhost:3000/properties?${value}`,
    headers: {},
  };
  const result = await axios(config)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
  console.log(result);
  return result;
}
