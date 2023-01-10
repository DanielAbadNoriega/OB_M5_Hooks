import React from 'react';
import ReactDOM from 'react-dom/client';

//añadimos bootstrap a nuestro proyecto, se añade antes de los generales para que 
//bootstrap no nos los pise y podamos sobreescribir sus estilos
import "bootstrap/dist/css/bootstrap.css"
//! IMPORTANTE -> Aquí van los estilos propios para que bootstrap no los pise
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
