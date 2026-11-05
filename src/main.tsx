import React from 'react';
import { createRoot } from 'react-dom/client';
import { I18nProvider } from './i18n';
import App from './App';
import './index.css';

const container = document.getElementById('root');
if (container) {
  createRoot(container).render(
    <React.StrictMode>
      <I18nProvider>
        <App />
      </I18nProvider>
    </React.StrictMode>,
  );
}
