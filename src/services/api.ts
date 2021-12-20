import axios from 'axios';
import { baseURL } from 'constants/endpoints';

export const api = axios.create({
  baseURL,
  headers: {
    'Content-type': 'application/json',
  },
});
