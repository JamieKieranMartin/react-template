import { useState, useEffect } from 'react';
import { axiosInstance } from './axios';

export const useDataObject = (props) => {
  const [loading, setLoading] = useState(true);
  const [object, setObject] = useState([]);
  const [error, setErr] = useState(false);
  const { refresh } = props;

  useEffect(() => {
    setLoading(true);
    getAPI(props)
      .then(setObject)
      .catch(setErr)
      .finally(() => setLoading(false));
  }, [refresh]);

  return {
    loading,
    object,
    error
  };
};

const getAPI = (props) =>
  axiosInstance({
    url: `${props.route}`,
    params: props.params
  }).then((res) => res.data);
