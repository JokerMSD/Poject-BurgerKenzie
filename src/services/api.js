import axios from "axios";

const foodApi = axios.create({
  baseURL: "https://hamburgueria-kenzie-json-serve.herokuapp.com",
})

export { foodApi }
