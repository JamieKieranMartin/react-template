import React from 'react';
import PropTypes from 'prop-types';
import { Route, BrowserRouter as ReactRouter } from 'react-router-dom';
import Dashboard from '../pages/dashboard';
import Settings from '../pages/settings';
import Form from '../pages/form';

const Router = () => {
  return (
    <ReactRouter>
      <Route exact path="/" component={Dashboard} />

      <Route exact path="/form" component={Form} />

      <Route exact path="/settings" component={Settings} />
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
