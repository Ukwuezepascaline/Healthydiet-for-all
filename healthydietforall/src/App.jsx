import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import LoginPage from "./components/pages/LoginPage";
import SignUp from "./components/pages/SignUp";
import Services from "./components/pages/OurServices";
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
          path: "/services",
          element: <Services />,
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
