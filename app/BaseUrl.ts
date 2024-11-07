import axios from "axios";
const BaseUrl = axios.create({
  baseURL: "https://egypt-tours-backend.onrender.com",
});
export default BaseUrl;
