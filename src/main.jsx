import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom';
import styled from 'styled-components';
import ErrorPage from './ErrorPage';
import { GlobalStyle } from './styles';
import Template from './template';
import QrCode from './qr-code/';
import TimeTracking from './time-tracking';
import { Container } from './components/Container';

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
    url: 'https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H',
  },
  {
    path: '/time-tracking',
    title: 'Time Tracking',
    element: <TimeTracking />,
    url: 'https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw',
  },
];

const router = createBrowserRouter(routes);

const Header = styled(Container)`
  background: #7aaca5;
  border-radius: 1rem 1rem 0 0;
`;

const RouteList = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.2rem;

  ul {
    display: flex;
    list-style: none;
    gap: 1rem;
  }
`;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <Header>
      <h2>Styling Exercises</h2>
      <RouteList>
        <ul>
          {routes.map((route) => (
            <li key={route.title}>
              <a href={route.path}>{route.title}</a>
            </li>
          ))}
        </ul>
      </RouteList>
    </Header>
    <RouterProvider router={router} />
  </React.StrictMode>
);
