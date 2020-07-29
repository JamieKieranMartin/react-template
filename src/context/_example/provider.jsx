import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Context } from './context';
import { useApi } from '../../core/api';
import * as api from './api';

export const Provider = (props) => {
  const [refresh, setRefresh] = useState(false);

  const { loading, data, error } = useApi({
    refresh,
    url: ''
  });

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

Provider.propTypes = {
  children: PropTypes.element
};
