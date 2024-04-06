
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import LoginPage from "./components/pages/LoginPage";
import SignUp from "./components/pages/SignUp";
import AboutusPage from "./components/pages/Aboutus";
import Services from "./components/pages/OurServices";
import ServicePage from "./components/pages/ServicePage";
import ResetPassword from "./components/pages/ResetPassword";

import './App.css';

function App() {
  const router = createBrowserRouter([
    {
    
      children: [
        {
          path: "/",
          element: <LoginPage />,
        },
        
        {
          path: "/signUp",
          element: <SignUp />,
        },

        {
          path: "/aboutus",
          element: <AboutusPage />,
        },

        {
          path: "/services",
          element: <Services />,
        },

        {
          path: "/servicePage",
          element: <ServicePage />,
        },

        {
          path: "/resetPassword",
          element: <ResetPassword />,
        },
      ],
    },
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App
