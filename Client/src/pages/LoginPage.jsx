import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
function LoginPage() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [mobileLogin, setMobileLogin] = useState(false);
  const navigate = useNavigate();
  const handleOptionChange = (option) => {
    setSelectedOption(option.target.value);
  };
  const handleSubmit = () => {
    if (selectedOption) {
      if (selectedOption === "new-user") {
        navigate("/choose-location", {
          state: {
            mobileLogin,
          },
        });
      } else if (selectedOption === "phone-number") {
        navigate("/mobile-number", setMobileLogin(true), {
          state: { mobileLogin },
        });
      } else if (selectedOption === "yojana-card") {
        navigate("/yojana-card", setMobileLogin(true), {
          state: { mobileLogin },
        });
      }
    } else {
      alert("Choose an option");
    }
  };
  return (
    <>
      <div className="login-way-page">
        <div className="login-header">
          <button className="back-button" onClick={() => navigate(-1)}>
            &larr;
          </button>
          <h1>How do you prefer to login?</h1>
        </div>
        <div className="login-body">
          <div className="login-options">
            <label style={{ display: "block" }}>
              <input
                name="login-option"
                type="radio"
                value="new-user"
                onChange={handleOptionChange}
              />
              Register me as a new user
            </label>
            <label style={{ display: "block" }}>
              <input
                name="login-option"
                type="radio"
                value="phone-number"
                onChange={handleOptionChange}
              />
              Use my Phone Number
            </label>
            <label style={{ display: "block" }}>
              <input
                name="login-option"
                type="radio"
                value="yojana-card"
                onChange={handleOptionChange}
              />
              Use my Yojana Card
            </label>
          </div>
          <button className="submit" onClick={handleSubmit}>
            Next
          </button>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
