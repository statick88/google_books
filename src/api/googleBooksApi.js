// src/api/googleBooksApi.js
import axios from 'axios';

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = 'https://www.googleapis.com/books/v1/volumes';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  params: {
    key: API_KEY,
  },
});

export default axiosInstance;