import axios from "axios";

async function getProperties() {
  var config = {
    method: "get",
    url: "http://localhost:3000/properties",
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

export default getProperties;
