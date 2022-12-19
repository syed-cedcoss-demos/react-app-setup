import React, { Navigate, Outlet } from 'react-router-dom';

const PrivateRoutes = () => {
  const auth = true;
  return auth ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoutes;
