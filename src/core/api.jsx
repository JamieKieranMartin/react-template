import { useState, useEffect } from 'react';
import { axiosInstance } from './axios';

export const useApi = (props) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const { refresh } = props;

  useEffect(() => {
    setLoading(true);
    getAPI(props)
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [refresh]);

  return {
    loading,
    data,
    error
  };
};

const getAPI = ({ url, params }) =>
  axiosInstance({
    url,
    params
  }).then((res) => res.data);
