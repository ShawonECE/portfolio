import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import ErrorPage from './components/ErrorPage';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <App></App>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
