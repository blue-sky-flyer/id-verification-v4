import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Welcome() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-center p-4">
      <img src="/logo.png" alt="Premium Logo" className="mb-6 w-40" />
      <h1 className="text-2xl font-bold mb-4 text-primary">Welcome to Premium Identity Verification</h1>
      <button onClick={() => navigate('/capture-id')} className="bg-primary text-white px-6 py-3 rounded-full text-lg hover:bg-secondary">
        Start Verification
      </button>
    </div>
  );
}