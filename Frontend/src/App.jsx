import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import Registrationform from "./Components/RegistrationForm/RegistrationForm";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Registrationform />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
