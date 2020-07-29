import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: `${process.env.SERVER}/api/`
});

axiosInstance.defaults.headers.post['Content-Type'] = 'application/json';

axiosInstance.interceptors.request.use((config) => {
  if (document.location.hostname === 'localhost') {
    console.info(`REQ: ${config.url}`, config);
  }

  return config;
});

// Add a response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    if (document.location.hostname === 'localhost') {
      console.info(`RES: ${response.config.url}`, response);
    }

    return response;
  },
  (e) => {
    if (document.location.hostname === 'localhost') {
      console.error('RES: ', e);
    }

    return Promise.reject(e);
  }
);
