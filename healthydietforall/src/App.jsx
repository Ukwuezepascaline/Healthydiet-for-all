import LoginPage from "./pages/LoginPage";
import SignUp from "./pages/SignUp";
// import AboutusPage from "./pages/aboutUs";
import Services from "./pages/OurServices";
import ServicePage from "./pages/ServicePage";
import ResetPassword from "./pages/ResetPassword";
import "./App.css";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signUp" element={<SignUp />} />
        {/* <Route path="/aboutUs" element={<AboutusPage />} /> */}
        <Route path="/services" element={<Services />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/resetPassword" element={<ResetPassword />} />
      </Routes>
    </main>
  );
};

// function App() {
//   const router = createBrowserRouter([
//     {
//       children: [
//         {
//           path: "/",
//           element: <LoginPage />,
//         },

//         {
//           path: "/signUp",
//           element: <SignUp />,
//         },

//         {
//           path: "/aboutus",
//           element: <AboutusPage />,
//         },

//         {
//           path: "/services",
//           element: <Services />,
//         },

//         {
//           path: "/servicePage",
//           element: <ServicePage />,
//         },

//         {
//           path: "/resetPassword",
//           element: <ResetPassword />,
//         },
//       ],
//     },
//   ]);
//   return <RouterProvider router={router} />;
// }

export default App;
