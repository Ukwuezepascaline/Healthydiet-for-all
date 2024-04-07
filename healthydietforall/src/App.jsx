import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./components/pages/Login";
import AboutusPage from "./components/pages/Aboutus";
import BlogPage from "./components/pages/Blog";
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
        {
          path: "/Blog",
          element: <BlogPage />,
        },
       
      ],
    },
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App
