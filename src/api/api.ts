import axios from 'axios';
import { getCookie } from '@/utils/utils';
// import { useUserStore } from '@/store/useUserStore';

const origin_URL = 'http://localhost:8080';

export const apiFetch = axios.create({
  baseURL: origin_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

export const multiApiFetch = axios.create({
  baseURL: origin_URL,
  headers: {
    'Content-Type': 'multipart/form-data',
  },
  withCredentials: true,
});

const isExitApplication = false;

apiFetch.interceptors.request.use((config) => {
  if (isExitApplication) {
    throw new axios.Cancel('Application Exit!');
  }

  // const { accessToken } = useUserStore.getState();
  const accessToken = getCookie('token');

  if (accessToken) {
    config.headers.set('Authorization', accessToken);
  }

  return config;
});

multiApiFetch.interceptors.request.use((config) => {
  if (isExitApplication) {
    throw new axios.Cancel('Application Exit!');
  }

  // const { accessToken } = useUserStore.getState();
  const accessToken = getCookie('token');

  if (accessToken) {
    config.headers.set('Authorization', accessToken);
  }

  return config;
});
