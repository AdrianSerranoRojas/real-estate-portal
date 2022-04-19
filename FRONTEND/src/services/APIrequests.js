import axios from "axios";

export async function getPropertiesFiltered(value) {
  console.log(value);
  const valueSplit = value.slice(1);
  console.log(valueSplit);
  var config = {
    method: "get",
    url: `http://localhost:8100/api/properties?${valueSplit}`,
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
