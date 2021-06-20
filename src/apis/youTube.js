import axios from "axios";

const KEY = "AIzaSyDZqrUbWe0dVi_dXrF41XdOcWjyL-DwnLs";

const axiosCreated = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    mexResult: 5,
    key: KEY
  }
});

export default axiosCreated;
