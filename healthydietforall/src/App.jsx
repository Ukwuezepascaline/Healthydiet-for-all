import LoginPage from "./pages/LoginPage";
import SignUp from "./pages/SignUp";
import AboutusPage from "./pages/aboutUs";
import Services from "./pages/OurServices";
import ServicePage from "./pages/ServicePage";
import ResetPassword from "./pages/ResetPassword";
import BlogPage from "./pages/Blog";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar1";
import CreateBlog from "./pages/CreateBlog";
import HomePage from "./pages/Home";


const App = () => {
  return (
    <main>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/aboutUs" element={<AboutusPage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/resetPassword" element={<ResetPassword />} />
        <Route path="/create-blog" element={<CreateBlog />} />
        <Route path="/blogs" element={<BlogPage />} />
      </Routes>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </main>
  );
};
export default App;
