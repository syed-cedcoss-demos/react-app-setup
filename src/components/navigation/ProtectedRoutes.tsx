import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoutes = () => {
  console.log('VVV');
  const auth = true;
  return auth ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoutes;
