import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import LoginPage from './pages/Auth/Login';
import SignupPage from './pages/Auth/SignupPage';
import TrainerPage from './pages/Trainer/TrainerPage';
import MembershipPage from './pages/Membership/MembershipPage';
import ClassesPage from './pages/Classes/ClassesPage';
import AdminPage from './pages/Admin/AdminPage';
import PrivateRoute from './components/PrivateRoute';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/trainers" element={<TrainerPage />} />
      <Route path="/membership" element={<MembershipPage />} />
      <Route path="/classes" element={<ClassesPage />} />
      <Route path="/admin" element={<PrivateRoute><AdminPage /></PrivateRoute>} />
    </Routes>
  );
}