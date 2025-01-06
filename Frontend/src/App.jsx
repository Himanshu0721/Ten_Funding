import "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import Registrationform from "./Components/RegistrationForm/Registration.jsx";
import RegistrationFormNext from "./Components/RegistrationForm/RegistrationFormNext.jsx";
import PrivacyPolicy from "./Components/PrivacyPolicy/PrivacyPolicy";
import TermsOfService from "./Components/TermsOfService/TermsOfService";
import Card from "./Components/Card/Cardframe";
import About from "./Components/About/About";
import FundraisingPage from "./Components/Fundraising/FundraisingPage.jsx";
import Spotlight from "./Components/Spotlight/Spotlight.jsx";
import SpotlightForm from "./Components/Spotlight/SpotlightForm.jsx";
import VCStack from "./Components/VC Stack/VCStack.jsx";
import VCStackForm from "./Components/VC Stack/VCStackForm.jsx";
import NextPlay from "./Components/NextPlay/NextPlay.jsx";
import Pitch from "./Components/Card/Pitch.jsx";
<<<<<<< HEAD
import LaunchPad from "./Components/LaunchPad/LaunchPad.jsx";
=======
import VentureOS from "./Components/Venture OS/VentureOS.jsx";

>>>>>>> f9b877a317ba8b807bf2b424a2e315e614780cad
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
          <Route path="/Pitch" element={<Pitch />} />
          <Route
            path="/registrationformnext"
            element={<RegistrationFormNext />}
          />
          <Route path="/fundraising-os" element={<FundraisingPage />} />
          <Route path="/nextplay" element={<NextPlay />} />
          <Route path="/spotlight" element={<Spotlight />} />
          <Route path="/spotlight-form" element={<SpotlightForm />} />
          <Route path="/vc-stack" element={<VCStack />} />
          <Route path="/vc-Stack-form" element={<VCStackForm />} />
<<<<<<< HEAD
          <Route path="/launchpad" element={<LaunchPad/>} />
=======
          <Route path="/venture-os" element={<VentureOS />} />
>>>>>>> f9b877a317ba8b807bf2b424a2e315e614780cad
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
