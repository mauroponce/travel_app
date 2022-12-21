import React from 'react'
import {
  Navigate,
  Outlet
} from 'react-router-dom';

export default function ProtectedRoute({
  isAllowed,
  redirectPath = '/login',
  children,
}) {
  if (!isAllowed) {
    debugger
    return <Navigate to={redirectPath} replace />;
  }

  return children ? children : <Outlet />;
}