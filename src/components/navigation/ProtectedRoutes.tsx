import React, { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoutes = () => {
  const auth = true;
  return auth ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoutes;
