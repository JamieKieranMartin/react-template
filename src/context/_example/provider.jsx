import React, { useState, useEffect } from 'react';
import { Context } from './context';
import { useDataObject } from '../../components/APIV2';
import * as api from './api';

export const Provider = (props) => {
  const [refresh, setRefresh] = useState(false);
  const [data, setData] = useState([]);

  const { loading, object, error } = useDataObject({
    refresh,
    route: ''
  });

  useEffect(() => {
    Array.isArray(object) && setData(object);
  }, [object]);

  return (
    <Context.Provider
      value={{
        loading,
        data,
        api,
        error,
        refresh: () => setRefresh(!refresh)
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
