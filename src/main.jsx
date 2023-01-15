import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom';
import ErrorPage from './ErrorPage';
import { GlobalStyle } from './styles';
import Template from './template';

const routes = [
  {
    path: '/',
    title: 'Template',
    element: <Template />,
    errorElement: <ErrorPage />,
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
