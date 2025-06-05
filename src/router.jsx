/* eslint-disable react-refresh/only-export-components */

import { lazy } from 'react';
import { createBrowserRouter } from 'react-router';
import App from './App';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const Admin = lazy(() => import('./pages/Admin/Admin'));

export const ROUTER = createBrowserRouter([
  {
    path: '/',
    Component: App,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: 'admin',
        Component: Admin,
      },
    ],
  },
]);