import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';




export default function PrivateRoute({ children }) {
  const { user, login, logout, loading } = useAuth();
  return user ? children : <Navigate to="/login" />;
}