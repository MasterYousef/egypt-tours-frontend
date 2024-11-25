import axios from "axios";
const BaseUrl = axios.create({
  baseURL: "egypt-tours-backend-production.up.railway.app",
});
export default BaseUrl;
