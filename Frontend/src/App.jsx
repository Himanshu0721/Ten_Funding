import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Registrationform from "./Components/RegistrationForm/RegistrationForm";

function App() {
  return (
    <>
      <BrowserRouter>
        <Registrationform />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
