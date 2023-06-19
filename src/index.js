import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './components/pages/About';
import LandingPage from './components/pages/LandingPage/LandingPage';
import Login from './components/pages/Get Started/Login';
import Register from './components/pages/Get Started/Register';

const router = createBrowserRouter([
  {
    path: "/",
    element:<App/>,
  },
  {
    path: "landing-page",
    element: <LandingPage/>,
  },
  {
    path: "about",
    element:<About/>,
  },
  {
    path: "register",
    element:<Register/>,
  },
  {
    path: "login",
    element:<Login/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RouterProvider router={router} />
);


/*const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();*/
