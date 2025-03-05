import React from 'react';
import { useAuthStore } from '../store/useAuthStore';

const Navbar = () => {
  const { logout, authUser } = useAuthStore();
  return (
    <div>
      <h1>Social Interaction</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Navbar;
