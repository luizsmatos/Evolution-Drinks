import axios from 'axios';

const api = axios.create({
  baseURL: 'https://some-domain.com/api/',
});

export default api;
