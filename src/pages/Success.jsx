import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Success() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-4">
      <h1 className="text-2xl font-bold mb-4 text-primary">✅ Identity Verified!</h1>
      <p className="text-gray-600">Approval Code: X24916Y</p>
      <button onClick={() => navigate('/')} className="bg-primary text-white px-6 py-2 rounded-full hover:bg-secondary hover:text-black">
        Restart
      </button>
    </div>
  );
}
