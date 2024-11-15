import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import StartPage from "./pages/StartPage";
import Loading from "./pages/Loading";
import Language from "./pages/Language";
import LoginPage from "./pages/LoginPage";
import YojanaCardLogin from "./pages/YojanaCardLogin";
import ChooseLocation from "./pages/ChooseLocation";
import LocationForm from "./pages/LocationForm";
import MapPage from "./pages/MapPage";
import MobileNumber from "./pages/MobileNumber";
import RequireOTP from "./pages/RequireOTP";
import OTPPage from "./pages/OtpPage";
import PersonalDetails from "./pages/PersonalDetails";
import Welcome from "./pages/Welcome";
import "./App.css";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/loading" element={<Loading />} />
          <Route path="/language" element={<Language />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/yojana-card" element={<YojanaCardLogin />} />
          <Route path="/choose-location" element={<ChooseLocation />} />
          <Route path="/location-form" element={<LocationForm />} />
          <Route path="/map-page" element={<MapPage />} />
          <Route path="/mobile-number" element={<MobileNumber />} />
          <Route path="/require-otp" element={<RequireOTP />} />
          <Route path="/otp-verification" element={<OTPPage />} />
          <Route path="/personal-details" element={<PersonalDetails />} />
          <Route path="/welcome" element={<Welcome />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
