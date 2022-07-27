import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

const config: AxiosRequestConfig = {
  baseURL: 'https://webhook.site/9e514c90-feec-4f83-acec-bc72a10f8b4b',
};

const client: AxiosInstance = axios.create(config);

export default client;
