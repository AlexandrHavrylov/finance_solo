import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

export default function ProtectedRoutex() {
  const isAuth = useSelector(state => state.auth.isLoggedIn);
  return isAuth ? <Outlet /> : <Navigate to="/login" />;
}
