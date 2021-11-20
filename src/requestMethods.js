import axios from "axios";

const BASE_URL = "https://books-library-dev.herokuapp.com";

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNjgyZmI4NjgwMzZjN2JjMGQyMTA1MSIsInVzZXJuYW1lIjoiZWxrYSIsImlhdCI6MTYzNzQwODQ0MSwiZXhwIjoxNjM3NDk0ODQxfQ.PmTSstMNcr356GLwLA82N1v0tMvBaf8kxjWHrab6vjU";

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