import React from 'react';
import { createRoot } from 'react-dom/client';
import LabPage from './LabPage.jsx';
import './styles.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LabPage />
  </React.StrictMode>,
);
