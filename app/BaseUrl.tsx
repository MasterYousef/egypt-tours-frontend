import axios from "axios";
const BaseUrl = axios.create({
  baseURL: "/api",
});
export default BaseUrl;
