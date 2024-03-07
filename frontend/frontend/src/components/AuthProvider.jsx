// AuthProvider.js
import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const initialIsLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  const [isLoggedIn, setIsLoggedIn] = useState(initialIsLoggedIn);

  const login = async function () {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/v1/auth",
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
            'Content-Type': 'application/json'
          },
        }
      );

      if (response.data.success) {
        localStorage.setItem("isLoggedIn", true);
        setIsLoggedIn(true);
      } else {
        console.log(response.data.message);
      }
    } catch (error) {
      console.error('Error during login:', error.message);
    }
  };

  const logout = () => {
    try {
      setIsLoggedIn(false);
      localStorage.removeItem("token");
      localStorage.setItem("isLoggedIn", false);
    } catch (error) {
      console.error('Error during logout:', error.message);
    }
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
