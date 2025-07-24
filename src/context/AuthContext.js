import React, { createContext, useState, useEffect, useContext } from 'react';

// Create the AuthContext
export const AuthContext = createContext({
  user: null,
  login: async () => {},
  logout: () => {},
  loading: true,
});

// Custom hook to use AuthContext
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Load user from localStorage on initial render
  useEffect(() => {
    try {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    } catch (error) {
      console.error('Failed to load user from localStorage:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  // Login function
  const login = async (email, password) => {
    try {
      const response = await fetch('http://localhost:8185/members/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Login failed');
      }

      const userData = await response.json();
      setUser(userData);

      // Safely store user in localStorage
      try {
        localStorage.setItem('user', JSON.stringify(userData));
      } catch (error) {
        console.error('Failed to save user to localStorage:', error);
      }

      return { success: true };
    } catch (error) {
      console.error('Login error:', error.message);
      return { success: false, message: error.message };
    }
  };

  // Logout function
  const logout = () => {
    setUser(null);

    // Safely remove user from localStorage
    try {
      localStorage.removeItem('user');
    } catch (error) {
      console.error('Failed to remove user from localStorage:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}