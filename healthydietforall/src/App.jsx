import { Routes, Route } from "react-router-dom";
import LoginPage from "./components/pages/LoginPage";
import AboutusPage from "./components/pages/Aboutus";
import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/" element={<AboutusPage />} />
      </Routes>
    </>
  );
}

export default App
