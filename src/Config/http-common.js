import axios from "axios";

let token=localStorage.getItem('token')
export default axios.create({
  baseURL: "http://localhost:3001",
  headers: {
    "Content-type": "application/json",
    "Authorization":token
  }
});