import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import App from './App';
import { store } from './redux/app/store';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ReduxProvider store={ store }>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ReduxProvider>
  </React.StrictMode>
);

reportWebVitals();
