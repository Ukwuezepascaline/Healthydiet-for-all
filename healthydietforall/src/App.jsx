import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import LoginPage from "./components/pages/LoginPage";
import SignUp from "./components/pages/SignUp";
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
