import React from "react";
import { useNavigate } from "react-router-dom";
import QRCOde from "../components/QRCOde";
function YojanaCardLogin() {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/mobile-number");
  };
  const handleImageSubmit = () => {
    navigate("/welcome");
  };
  return (
    <>
      <div className="yojana">
        <div className="yojana-header">
          <button className="back-button" onClick={() => navigate(-1)}>
            &larr;
          </button>
          <h1>Scan QR from Yojana Card to login</h1>
          <button className="torch-button">&#x1F526;</button>
        </div>
        <div className="yojana-body">
          <button className="qr-code-button" onClick={handleImageSubmit}>
            <QRCOde />
          </button>
          <button className="upload-button">Upload Image from Gallery</button>
        </div>
        <div className="yojana-footer">
          <h2 className="separator">OR</h2>
          <button className="phone-button" onClick={handleSubmit}>
            Use Phone Number
          </button>
        </div>
      </div>
    </>
  );
}

export default YojanaCardLogin;
