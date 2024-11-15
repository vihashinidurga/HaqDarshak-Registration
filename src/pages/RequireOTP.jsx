import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function RequireOTP() {
  const navigate = useNavigate();
  const location = useLocation();
  const { selectedState, selectedDistrict, pincode, mobileNumber } =
    location.state || {};
  const [yes, setYes] = useState("");
  console.log(selectedDistrict, selectedState, pincode, mobileNumber);

  const handleOptionChange = (event) => {
    setYes(event.target.value);
  };

  const handleNextClick = () => {
    if (yes === "Yes") {
      navigate("/personal-details", {
        state: { selectedState, selectedDistrict, pincode, mobileNumber },
      });
    } else {
      navigate("/otp-verification", {
        state: { selectedState, selectedDistrict, pincode, mobileNumber },
      });
    }
  };

  return (
    <div className="require-otp-page">
      <div className="require-header">
        <button className="back-button" onClick={() => navigate(-1)}>
          &larr;
        </button>
        <h1>Do you want to proceed without OTP verification?</h1>
      </div>
      <div className="require-body">
        <div className="options">
          <label>
            <input
              type="radio"
              name="otp-option"
              value="Yes"
              onChange={handleOptionChange}
            />
            Yes
          </label>
          <label>
            <input
              type="radio"
              name="otp-option"
              value="No"
              onChange={handleOptionChange}
            />
            No, I want to complete OTP verification
          </label>
        </div>
        <p>
          Proceed without OTP if you live in an area with low network
          connectivity.
        </p>
        <button className="submit" onClick={handleNextClick}>
          Next
        </button>
      </div>
    </div>
  );
}

export default RequireOTP;
