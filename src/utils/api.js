
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://dannie-agro.onrender.com/',
  withCredentials: true, // Required to send/receive cookies
});

export default api;
