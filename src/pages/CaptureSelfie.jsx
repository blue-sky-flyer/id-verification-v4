import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CaptureSelfie() {
  const navigate = useNavigate();
  const [file, setFile] = useState(null);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-4">
      <h1 className="text-xl font-bold mb-4 text-primary">Upload a selfie</h1>
      <input type="file" onChange={e => setFile(e.target.files[0])} className="mb-4" />
      <button onClick={() => navigate('/verifying')} disabled={!file} className="bg-secondary text-black px-6 py-2 rounded-full hover:bg-primary hover:text-white">
        Submit
      </button>
    </div>
  );
}