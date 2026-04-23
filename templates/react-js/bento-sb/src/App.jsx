import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import ToastContainer from './components/ToastContainer';

// Pages
import Landing from './pages/Landing';
import About from './pages/About';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Login from './pages/Login';
import Register from './pages/Register';
import UserDashboard from './pages/UserDashboard';
import AdminDashboard from './pages/AdminDashboard';

import NotFound from './pages/NotFound';

// Protected Route Component
const ProtectedRoute = ({ children, requiredRole }) => {
  const { user, userData, loading } = useAuth();

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-slate-900">
      <div className="loader"></div>
    </div>
  );

  if (!user) return <Navigate to="/login" />;

  if (requiredRole && userData?.role !== requiredRole) {
    return <Navigate to={userData?.role === 'admin' ? '/admin-dashboard' : '/user-dashboard'} />;
  }

  return children;
};

const AppRoutes = () => {
  const { user, userData } = useAuth();

  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Landing />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      
      {/* Auth Routes */}
      <Route path="/login" element={user ? <Navigate to={userData?.role === 'admin' ? '/admin-dashboard' : '/user-dashboard'} /> : <Login />} />
      <Route path="/register" element={user ? <Navigate to={userData?.role === 'admin' ? '/admin-dashboard' : '/user-dashboard'} /> : <Register />} />

      {/* Protected Routes */}
      <Route path="/user-dashboard" element={
        <ProtectedRoute requiredRole="user">
          <UserDashboard />
        </ProtectedRoute>
      } />
      
      <Route path="/admin-dashboard" element={
        <ProtectedRoute requiredRole="admin">
          <AdminDashboard />
        </ProtectedRoute>
      } />

      {/* 404 Fallback */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const App = () => {
  return (
    <HelmetProvider>
      <AuthProvider>
        <Router>
          <AppRoutes />
          <ToastContainer />
        </Router>
      </AuthProvider>
    </HelmetProvider>
  );
};

export default App;
