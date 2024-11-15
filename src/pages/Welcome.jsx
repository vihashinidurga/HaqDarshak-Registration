import React, { useState } from "react";
import { useEffect } from "react";
import logo from "../assets/HQ 4.png";
import pattern from "../assets/Pattern.png";
function Welcome() {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <div className="welcome-page">
        <img src={pattern} alt="Pattern" />

        {showWelcome ? (
          <div className="welcome-container">
            <h1>Welcome</h1>
            <img src={logo} alt="Logo" className="logo" />
            <p>Your profile has been created successfully!</p>
          </div>
        ) : (
          <div className="content-container">
            <img src={logo} alt="" />
            <div className="text-content">
              <h2>
                ☑ Find the benefits that are right for you or your business
              </h2>
              <h2>☑ Learn everything you need to apply</h2>
              <h2>☑ Save Schemes and track you bookings</h2>
            </div>
            <button>Get Started!</button>
          </div>
        )}
      </div>
    </>
  );
}

export default Welcome;
