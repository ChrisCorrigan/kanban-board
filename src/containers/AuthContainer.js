import React, { createContext, useContext, useState, useEffect } from "react";
import { login, logout, signup, onAuthStateChanged } from "./firebaseUtils"; // Import auth functions from firebaseUtils

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthContainer({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    login,
    logout,
    signup,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
