import "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import Registrationform from "./Components/RegistrationForm/RegistrationForm";
import PrivacyPolicy from "./Components/PrivacyPolicy/PrivacyPolicy";
import TermsOfService from "./Components/TermsOfService/TermsOfService";
import Card from "./Components/Card/Cardframe";
import About from "./Components/About/About";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/registration-form" element={<Registrationform />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-Service" element={<TermsOfService />} />
          <Route path="/Card" element={<Card />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
