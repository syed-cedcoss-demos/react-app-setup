/* eslint-disable @typescript-eslint/no-unused-vars */
import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Signup from '../auth/Signup';
const Login = lazy(() => import('../auth/Login'));

const AuthRoutes = (): JSX.Element => {
  return (
    <Routes>
      <Route
        path="/login"
        element={
          <Suspense fallback={<></>}>
            <Login />
          </Suspense>
        }
      />
      <Route path="signup" element={<Signup />} />
      <Route path="*" element={<Navigate to="/auth/login" />} />
    </Routes>
  );
};
export default AuthRoutes;
