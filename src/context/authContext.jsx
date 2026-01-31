import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  
  useEffect(() => {
    const storedUser = localStorage.getItem("realEstateUser");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

 
  const login = (userData) => {
    localStorage.setItem("realEstateUser", JSON.stringify(userData));
    setUser(userData);
  };

  
  const logout = () => {
    localStorage.removeItem("realEstateUser");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
