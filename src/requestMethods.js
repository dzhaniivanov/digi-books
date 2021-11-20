import axios from "axios";

const BASE_URL = "https://books-library-dev.herokuapp.com";

const TOKEN = "";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: {
        token: `Bearer ${TOKEN}`,
    },
});