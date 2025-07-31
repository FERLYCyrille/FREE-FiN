// components/ProtectedRoute.js
import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({ children, allowedRoles }) {
    const userData = JSON.parse(localStorage.getItem('user'));

    if (!userData || !userData.role) {
        // Pas connecté
        return <Navigate to="/login" replace />;
    }

    if (!allowedRoles.includes(userData.role)) {
        // Connecté mais mauvais rôle
        return <Navigate to="/unauthorized" replace />;
    }

    return children;
}
