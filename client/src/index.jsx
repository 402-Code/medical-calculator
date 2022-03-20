import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { ChildProvider } from './context/UserContext';

axios.defaults.baseURL = process.env.SERVER_BASE_URL;
axios.defaults.withCredentials = true;

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ChildProvider>
        <App />
      </ChildProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
