import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage, Login, Messenger, Profile, Settings, SignUp } from "./pages";
import { useAuthStore } from "./store/useAuthStore";
import { Toaster } from "react-hot-toast";

const App = () => {
  const { authUser, checkAuth, isCheckingAuth } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  // TODO: Add loading component
  if (isCheckingAuth && !authUser) return <div>Loading...</div>;

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
          element={
            authUser ? (
              <CommonLayout>
                <HomePage />
              </CommonLayout>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/settings"
          element={
            authUser ? (
              <CommonLayout>
                <Settings />
              </CommonLayout>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/profile"
          element={
            authUser ? (
              <CommonLayout>
                <Profile />
              </CommonLayout>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/messenger"
          element={
            authUser ? (
              <CommonLayout>
                <Messenger />
              </CommonLayout>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/signup"
          element={!authUser ? <SignUp /> : <Navigate to="/" />}
        />
        <Route
          path="/login"
          element={!authUser ? <Login /> : <Navigate to="/" />}
        />
      </Routes>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default App;
