import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Register from './pages/Register';
import UserDashboard from './pages/UserDashboard';
import AdminDashboard from './pages/AdminDashboard';
import ToastContainer from './components/ToastContainer';

// Protected Route Component
const ProtectedRoute = ({ children, requiredRole }) => {
  const { user, userData, loading } = useAuth();

  // Show loading ONLY on initial mount if still fetching
  if (loading) {
    return (
      <div id="loading-overlay" className="fixed inset-0 bg-gray-50 dark:bg-gray-950 flex flex-col justify-center items-center z-[99999]">
        <div className="loader-main"></div>
        <p className="font-semibold text-gray-900 dark:text-gray-100 tracking-wide mt-6">Loading SmartDash...</p>
      </div>
    );
  }

  // If no user, send to login
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // If role doesn't match, send to correct dashboard instantly
  if (requiredRole && userData && userData.role !== requiredRole) {
    const target = userData.role === 'admin' ? '/admin-dashboard' : '/user-dashboard';
    return <Navigate to={target} replace />;
  }

  return <div className="protected-content content-visible">{children}</div>;
};

// Public Route (redirects if already logged in)
const PublicRoute = ({ children }) => {
  const { user, userData, loading } = useAuth();
  
  if (loading) {
    return (
      <div id="loading-overlay" className="fixed inset-0 bg-gray-50 dark:bg-gray-950 flex flex-col justify-center items-center z-[99999]">
        <div className="loader-main"></div>
        <p className="font-semibold text-gray-900 dark:text-gray-100 tracking-wide mt-6">Loading...</p>
      </div>
    );
  }

  // If logged in and role is known, redirect to dashboard instantly
  if (user && userData) {
    const target = userData.role === 'admin' ? '/admin-dashboard' : '/user-dashboard';
    return <Navigate to={target} replace />;
  }

  return <div className="protected-content content-visible">{children}</div>;
};


function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<PublicRoute><LandingPage /></PublicRoute>} />
      <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
      <Route path="/register" element={<PublicRoute><Register /></PublicRoute>} />
      <Route path="/user-dashboard" element={<ProtectedRoute requiredRole="user"><UserDashboard /></ProtectedRoute>} />
      <Route path="/admin-dashboard" element={<ProtectedRoute requiredRole="admin"><AdminDashboard /></ProtectedRoute>} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

function App() {
  // Global theme handling snippet (from old code)
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  return (
    <AuthProvider>
      <BrowserRouter>
        <AppRoutes />
        <ToastContainer />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
