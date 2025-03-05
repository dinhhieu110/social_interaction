import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import { Navigate, Route, Routes } from 'react-router-dom';
import { HomePage, Login, Profile, Settings, SignUp } from './pages';
import { useAuthStore } from './store/useAuthStore';
import { Toaster } from 'react-hot-toast';

const App = () => {
  const { authUser, checkAuth, isCheckingAuth } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  console.log('authUser:', authUser);
  // TODO: Add loading component
  // if (isCheckingAuth && !authUser) return <div>Loading...</div>;

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

  const CommonLayout = ({ children }) => {
    return (
      <div>
        <Navbar />
        {children}
      </div>
    );
  };

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={CommonLayout(getAuthenticatedPage(HomePage))}
        />
        <Route path="/signup" element={getUnauthenticatedPage(SignUp)} />
        <Route path="/login" element={getUnauthenticatedPage(Login)} />
        <Route
          path="/settings"
          element={CommonLayout(getAuthenticatedPage(Settings))}
        />
        <Route
          path="/profile"
          element={CommonLayout(getAuthenticatedPage(Profile))}
        />
      </Routes>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default App;
