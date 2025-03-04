import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import { Navigate, Route, Routes } from 'react-router-dom';
import { HomePage, Login, Profile, Settings, SignUp } from './pages';
import { useAuthStore } from './store/useAuthStore';

const App = () => {
  const { authUser, checkAuth, isCheckingAuth } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  console.log('authUser:', authUser);
  // TODO: Add loading component
  if (isCheckingAuth && !authUser) return <div>Loading...</div>;

  // Pages require authenticated user
  const getAuthenticatedPage = (Component) => {
    if (authUser && Component) {
      return <Component />;
    }
    return <Navigate to={'/login'} />;
  };

  // Pages require unauthenticated user
  const getUnauthenticatedPage = (Component) => {
    if (!authUser && Component) {
      return <Component />;
    }
    return <Navigate to={'/'} />;
  };

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={getAuthenticatedPage(HomePage)} />
        <Route path="/signup" element={getUnauthenticatedPage(SignUp)} />
        <Route path="/login" element={getUnauthenticatedPage(Login)} />
        <Route path="/settings" element={getAuthenticatedPage(Settings)} />
        <Route path="/profile" element={getAuthenticatedPage(Profile)} />
      </Routes>
    </div>
  );
};

export default App;
