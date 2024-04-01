import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./components/pages/Login";
import AboutusPage from "./components/pages/Aboutus";
import './App.css';

function App() {
  const router = createBrowserRouter([
    {
    
      children: [
        {
          path: "/",
          element: <LoginPage />,
        },
        // other pages....
        {
          path: "/Aboutus",
          element: <AboutusPage />,
        },
       
      ],
    },
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App
