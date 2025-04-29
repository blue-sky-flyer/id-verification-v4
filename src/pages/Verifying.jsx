import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Verifying() {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => navigate('/success'), 2000);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-4">
      <h1 className="text-xl font-bold text-primary">Verifying your information...</h1>
    </div>
  );
}