import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
function MobileNumber() {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileNumber, setMobilenumber] = useState("");
  const { selectedState, selectedDistrict, pincode } = location.state || {};
  const { mobileLogin } = location || {};
  const [showNextButton, setShowNextButton] = useState(false);

  const handleMobileNumberChange = (event) => {
    const inputNumber = event.target.value;
    setMobilenumber(inputNumber);
    setShowNextButton(inputNumber.length === 10);
  };
  const handleNextbutton = () => {
    const userData = {
      phonenumber: mobileNumber,
    };

    fetch("http://localhost:8800/api/save-user-details", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((response) => {
        if (response.status === 409) {
          alert("Phone number already exists!!");
        } else if (response.ok) {
          if (mobileLogin) {
            navigate("/otp-verification", { state: { mobileLogin } });
          } else {
            navigate("/require-otp", {
              state: { selectedState, selectedDistrict, pincode, mobileNumber },
            });
          }
        } else {
          console.log("An error occured, check internet connectivity", error);
        }
      })
      .catch((error) => {
        console.error("Error saving user data:", error);
      });
  };

  return (
    <>
      <div className="mobile-page">
        <div className="mobile-page-header">
          <button className="back-button" onClick={() => navigate(-1)}>
            &larr;
          </button>
          <h1>What is your mobile number?</h1>
        </div>
        <div className="mobile-header-body">
          <input
            type="text"
            value={mobileNumber}
            onChange={handleMobileNumberChange}
            placeholder="Enter mobile number"
          />
          {showNextButton && (
            <button className="submit" onClick={handleNextbutton}>
              Next
            </button>
          )}
          <p>
            This is used to create an account in your name on Haqdarshak app.
          </p>
        </div>
      </div>
    </>
  );
}

export default MobileNumber;
