import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { ChildProvider } from './context/ChildContext';

axios.defaults.baseURL = 'http://localhost:3000';
axios.defaults.withCredentials = true;


ReactDOM.render(
  <React.StrictMode>
    <ChildProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChildProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
