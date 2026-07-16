import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './Root/Root';
import Home from './Layout/Home';
import Login from './Layout/Login';
import Register from './Layout/Register';
import AuthProvider from './Contexts/AuthContexts/AuthProvider';
import PrivateRoutes from './PrivateRoutes/PrivateRoutes';
import Orders from './Layout/Orders';
import Dashbord from './Layout/Dashbord';
import Profile from './Layout/Profile';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      {
        path: "/login",
        Component: Login
      },
      {
        path: "/register",
        Component: Register
      },
      {
        path:"/orders",
        element:<PrivateRoutes>
          <Orders></Orders>
        </PrivateRoutes>
      },
      {
        path:"/dashbord",
        element:<PrivateRoutes>
          <Dashbord></Dashbord>
        </PrivateRoutes>
      },
      {
        path:"/profile",
        element:<PrivateRoutes><Profile></Profile></PrivateRoutes>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
