import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom';
import ErrorPage from './ErrorPage';
import { GlobalStyle } from './styles';
import Template from './template';
import QrCode from './qr-code/';
import TimeTracking from './time-tracking';

const routes = [
  {
    path: '/',
    title: 'Template',
    element: <Template />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/qr-code',
    title: 'QR Code',
    element: <QrCode />,
  },
  {
    path: '/time-tracking',
    title: 'Time Tracking',
    element: <TimeTracking />,
  },
];

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <div>
      <h1>Samples</h1>
      <ul>
        {routes.map((route) => (
          <li key={route.title}>
            <a href={route.path}>{route.title}</a>
          </li>
        ))}
      </ul>
    </div>
    <RouterProvider router={router} />
  </React.StrictMode>
);
