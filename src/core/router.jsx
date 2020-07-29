import React from 'react';
import PropTypes from 'prop-types';
import { Route, BrowserRouter as ReactRouter } from 'react-router-dom';
import Dashboard from '../pages/dashboard';

const Router = () => {
  return (
    <ReactRouter>
      <Route exact path="/" component={Dashboard} />
    </ReactRouter>
  );
};

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => <Component {...props} />} />
);

PrivateRoute.propTypes = {
  component: PropTypes.element.isRequired
};

export default Router;
