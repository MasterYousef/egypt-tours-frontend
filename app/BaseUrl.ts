import axios from "axios";
const BaseUrl = axios.create({
  baseURL: "https://egypt-tours-frontend.vercel.app",
});
export default BaseUrl;
