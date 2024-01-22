import { useAppSelector } from '@/redux/hooks';
import { fi } from 'date-fns/locale';
import React, { ReactNode, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const { user, isLoading } = useAppSelector((state) => state.user);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user?.email) {
      navigate('/');
    }
  }, [navigate, user]);
  if (isLoading) 'Loading....';
  return children;
};

export default ProtectedRoute;
