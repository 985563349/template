import { Navigate, useLocation } from 'react-router-dom';
import { useInitialState } from './context/InitialStateProvider';

function RequireAuth({ children }: { children: JSX.Element }) {
  const { initialState } = useInitialState();
  const location = useLocation();

  if (!initialState?.user) {
    return <Navigate to="/sign-in" state={{ from: location }} replace />;
  }

  return children;
}

export default RequireAuth;
