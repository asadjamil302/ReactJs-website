/* This is importing the different components of the app. */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import About from './Pages/About';
import Contact from './Pages/Contact';


import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Routes,  Route } from "react-router-dom";

/* A way to render the app. */
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
/* Routing the app to the different pages. */
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

/* A function that is used to measure performance in the app. */
reportWebVitals();
