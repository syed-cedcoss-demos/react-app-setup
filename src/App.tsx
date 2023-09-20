import React, { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import AuthRoutes from './components/navigation/AuthRoutes';
import ProtectedRoutes from './components/navigation/ProtectedRoutes';
import Welcome from './components/onboarding/Welcome';
import ErrorBoundary from './components/utils/ErrorBoundary';

function App() {
  console.log('ENV', process.env.REACT_APP_ENV);

  return (
    <ErrorBoundary>
      <Routes>
        {/* auth routes */}
        <Route path="/auth/*" element={<AuthRoutes />} />
        {/* on-boarding routes */}
        <Route path="/onboarding/:UUID" element={<ProtectedRoutes />}>
          <Route path="/onboarding/:UUID/welcome" element={<Welcome />} />
        </Route>
        <Route path="*" element={<Navigate to={'/auth/login'} />} />
      </Routes>
    </ErrorBoundary>
  );
}

export default App;
