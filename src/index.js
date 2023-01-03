import React from 'react';
import ReactDOM from 'react-dom/client';
import { initializeApp } from 'firebase/app'
import './index.css';
import App from './App';

const firebaseConfig = {
  apiKey: "AIzaSyB1xcQlJj5yXMG5nodOLqTe6hGRJLCiLrg",
  authDomain: "coder-house-react-1d5c8.firebaseapp.com",
  projectId: "coder-house-react-1d5c8",
  storageBucket: "coder-house-react-1d5c8.appspot.com",
  messagingSenderId: "95473862787",
  appId: "1:95473862787:web:acf3d467754a668dc833b6"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);