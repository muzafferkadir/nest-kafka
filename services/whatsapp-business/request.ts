import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

const config: AxiosRequestConfig = {
  baseURL: '<url>',
  headers: {
    Authorization: '<token>',
  },
};

const client: AxiosInstance = axios.create(config);

export default client;
