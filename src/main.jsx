import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Pages/App.jsx';
import './assets/css/index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ErrorPage } from './Pages/ErrorPage.jsx';
import { Category } from './Pages/Category.jsx';
import { Login } from './Pages/Login.jsx';
import { Register } from './Pages/Register.jsx';
import { Diagnosis } from './Pages/Diagnosis.jsx';
import { Chat } from './Pages/Chat.jsx';

const router = createBrowserRouter([
 {
  path: '/',
  element: <App />, //Landing Page
  errorElement: <ErrorPage />,
 },
 {
  path: '/category',
  element: <Category />, //Category Page
  errorElement: <ErrorPage />,
 },
 {
  path: '/diagnosis',
  element: <Diagnosis />, //Diagnosis Page
  errorElement: <ErrorPage />,
 },
 {
  path: '/chat',
  element: <Chat />, //Chat Page
  errorElement: <ErrorPage />,
 },
 {
  path: '/auth',
  children: [
   {
    path: 'login',
    element: <Login />, //Login Page
    errorElement: <ErrorPage />,
   },
   {
    path: 'register',
    element: <Register />, //Register Page
    errorElement: <ErrorPage />,
   },
  ],
 },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
 <React.StrictMode>
  <RouterProvider router={router} />
 </React.StrictMode>
);
