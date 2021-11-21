import axios from "axios";

const BASE_URL = "https://books-library-dev.herokuapp.com";

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOTlmZWY5NWQ1OTNkZDAwZjZkMmI5YyIsInVzZXJuYW1lIjoiaGVsbG8xMjMiLCJpYXQiOjE2Mzc0ODIzMjEsImV4cCI6MTYzNzU2ODcyMX0.FI0AaJpuUBsrDk9UJ9wjlR0YcCmXksugNHHXkEhwa-Y";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${TOKEN}`,
    },
});