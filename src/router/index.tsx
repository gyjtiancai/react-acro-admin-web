/*
 * Copyright (c) 2024 YuJie Ge(Smile)
 * Licensed under the MIT License.
 */

import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom"
import App from "../App.tsx"
import ErrorPage from "../views/ErrorPage.tsx"
import Login from "../views/Login.tsx"
import Register from "../views/Register.tsx"
import Home from "../views/Home.tsx"
import Page1 from "../views/Page1.tsx"
import Page2 from "../views/Page2.tsx"
import Page3 from "../views/Page3.tsx"
import Page4 from "../views/Page4.tsx"
const router = createBrowserRouter([
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/home",
        element: <Home />
      },
      {
        path: "/page1",
        element: <Page1 />
      },
      {
        path: "/page2",
        element: <Page2 />
      },
      {
        path: "/page3",
        element: <Page3 />
      },
      {
        path: "/page4",
        element: <Page4 />
      },

      {
        path: "/",
        element: <Navigate to="/home" replace />
      }
    ]
  }
])
function Router() {
  return <RouterProvider router={router} />
}
export default Router
