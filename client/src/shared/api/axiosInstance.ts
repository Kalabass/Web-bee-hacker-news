import axios from 'axios';

const instance = axios.create({
  baseURL: import.meta.env.API_BASE_URL || 'http://localhost:5252/',
});

export default instance;
