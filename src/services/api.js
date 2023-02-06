import axios from "axios";

export const api = axios.create({
    baseURL: "https://rocketnotes-api-yr84.onrender.com"
})