import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Welcome from './pages/Welcome';
import CaptureID from './pages/CaptureID';
import CaptureSelfie from './pages/CaptureSelfie';
import Verifying from './pages/Verifying';
import Success from './pages/Success';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/capture-id" element={<CaptureID />} />
      <Route path="/capture-selfie" element={<CaptureSelfie />} />
      <Route path="/verifying" element={<Verifying />} />
      <Route path="/success" element={<Success />} />
    </Routes>
  );
}