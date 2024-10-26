import axios from "axios";
const BaseUrl = axios.create({
  baseURL: "https://egypt-tours-backend.vercel.app",
});
export default BaseUrl;
