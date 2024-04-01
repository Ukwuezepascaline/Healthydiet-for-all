import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import LoginPage from "./components/pages/LoginPage";
import SignUp from "./components/pages/SignUp";
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
        


      ],
    },
  ])
  return (
    <RouterProvider router={router} />
  )
}

export default App
