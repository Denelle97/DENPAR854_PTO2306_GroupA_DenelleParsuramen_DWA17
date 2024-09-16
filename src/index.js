import React from 'react';                       // Importing the React library to use JSX and React components
import ReactDOM from 'react-dom/client';         // Importing ReactDOM to render the React app to the DOM
import './index.css';                            // Importing the main CSS file for global styles
import App from './App';                         // Importing the main App component
import reportWebVitals from './reportWebVitals'; // Importing a function to measure app performance

// Selecting the root element in the HTML where the React app will be rendered
const root = ReactDOM.createRoot(document.getElementById('root'));

// Rendering the React application
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
