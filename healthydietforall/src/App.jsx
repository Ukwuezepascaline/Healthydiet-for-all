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
import Navbar from "./components/Navbar";
import CreateBlog from "./pages/CreateBlog";
import HomePage from "./pages/Home";

import SingleBlogPage from "./pages/SingleBlog";


import Footer from "./components/Footer";


const App = () => {
  return (
    <main className="">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/about-us" element={<AboutusPage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/create-blog" element={<CreateBlog />} />
        <Route path="/blogs" element={<BlogPage />} />
        <Route path="/single-blog" element={<SingleBlogPage />} />

      </Routes>
      <Footer />
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
