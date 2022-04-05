import axios from "axios";

async function getProperties() {
  const result = await axios
    .get("http://localhost:3000/properties")
    .then((res) => console.log(res));
  await console.log(result);
  return result;
}

export default getProperties;
