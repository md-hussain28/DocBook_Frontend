// src/components/ProtectedRoute.tsx
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  children: JSX.Element;
}

function ProtectedRoute({ children }: ProtectedRouteProps): JSX.Element {
  const isAuthenticated = localStorage.getItem('auth') === 'true';

  if (!isAuthenticated) {
    // Redirect to login page if not authenticated
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default ProtectedRoute;
