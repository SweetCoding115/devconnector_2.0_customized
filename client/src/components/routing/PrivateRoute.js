import React from 'react';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Spinner from '../layout/Spinner';

const PrivateRoute = ({ component: Component }) => {
  const [isAuthenticated, loading] = useSelector((state) => [
    state.auth.isAuthenticated,
    state.auth.loading
  ]);
  if (loading) return <Spinner />;
  if (isAuthenticated) return <Component />;

  return <Navigate to="/login" />;
};

PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired
};

export default PrivateRoute;
