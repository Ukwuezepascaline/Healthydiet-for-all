import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import LoginPage from "./components/pages/LoginPage";
import './App.css';

function App() {
  
  const router = createBrowserRouter([
    {
      
      children: [
        {
          path: "/",
          element: <LoginPage />,
        },
        
      ],
    },
  ])
  return (
    <RouterProvider router={router} />
  )
}

export default App
