import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOL76sPjizXPyrrOpE12e3yo4iK0c_4XU",
  authDomain: "wineshopproject-7f88e.firebaseapp.com",
  projectId: "wineshopproject-7f88e",
  storageBucket: "wineshopproject-7f88e.appspot.com",
  messagingSenderId: "190795843010",
  appId: "1:190795843010:web:128c006b6d8d561936025b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
