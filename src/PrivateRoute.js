import { Route, Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

function PrivateRoute({ path, element }) {
    const { isAuthenticated } = useAuth();

    if (isAuthenticated) {
        return <Route path={path} element={element} />;
    }

    return <Navigate to="/login" replace />;
}

export default PrivateRoute;
