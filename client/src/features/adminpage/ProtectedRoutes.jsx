import { Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/fetch';

export const ProtectedRoutes = () => {
  const { cookies } = useAuth();
  return cookies.token ? useNavigate("/admin") : useNavigate("/");
}