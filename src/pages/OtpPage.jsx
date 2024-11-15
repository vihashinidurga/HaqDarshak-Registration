import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
const OtpPage = () => {
  const [otp, setOtp] = useState("");
  const [timer, setTimer] = useState(180);
  const [canResend, setCanResend] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { mobileLogin } = location.state || {};
  const { selectedState, selectedDistrict, pincode, mobileNumber } =
    location.state || {};

  useEffect(() => {
    const alertTimeout = setTimeout(() => {
      alert("Use OTP 7145");
    }, 100);

    return () => clearTimeout(alertTimeout);
  }, []);

  useEffect(() => {
    if (timer > 0) {
      const countdown = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
      return () => clearInterval(countdown);
    } else {
      setCanResend(true);
    }
  }, [timer]);

  const handleResendOtp = () => {
    setTimer(180);
    setCanResend(false);
    alert(" Use OTP 7145");
  };

  const handleOtpChange = (event) => {
    setOtp(event.target.value);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };
  const handleSubmit = () => {
    if (!mobileLogin) {
      navigate("/welcome");
    } else {
      navigate("/personal-details", {
        state: { selectedState, selectedDistrict, pincode, mobileNumber },
      });
    }
  };
  return (
    <div className="otp-page" style={{ padding: "20px" }}>
      <div className="otp-header">
        <button className="back-button" onClick={() => navigate(-1)}>
          &larr;
        </button>
        <h1>Enter OTP</h1>
      </div>
      <div className="otp-body">
        <input
          type="text"
          value={otp}
          onChange={handleOtpChange}
          maxLength="4"
          placeholder="Enter OTP"
        />

        <div style={{ marginTop: "20px" }}>
          {!canResend ? (
            <p>Resend OTP in {formatTime(timer)}</p>
          ) : (
            <p>
              Didn't receive the OTP?{" "}
              <span
                style={{ color: "blue", cursor: "pointer" }}
                onClick={handleResendOtp}
              >
                Resend OTP
              </span>
            </p>
          )}
        </div>
        <button className="submit" onClick={handleSubmit}>
          Next
        </button>
      </div>
    </div>
  );
};

export default OtpPage;
