import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { GoogleOAuthProvider } from '@react-oauth/google';

// Replace this with your actual Google OAuth Client ID from https://console.cloud.google.com/apis/credentials
const GOOGLE_CLIENT_ID = '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';

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <App />
    </GoogleOAuthProvider>
  </React.StrictMode>
);
