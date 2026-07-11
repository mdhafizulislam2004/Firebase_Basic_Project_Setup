import { createContext, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './Root/Root';
import Home from './Layout/Home';
import Login from './Layout/Login';
import Register from './Layout/Register';

const contextApi = createContext(null)
const userInfo = {
  email: "hafizul2004habib@gmail.com"
}

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
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <contextApi.Provider value={userInfo}>
      <RouterProvider router={router} />
    </contextApi.Provider>
  </StrictMode>,
)
