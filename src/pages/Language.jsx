import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Language = () => {
  const navigate = useNavigate();
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };
  const handleSubmit = () => {
    navigate("/login");
  };
  return (
    <>
      <div className="language-selection-page">
        <div className="language-header">
          <button className="back-button" onClick={() => navigate(-1)}>
            &larr;
          </button>
          <h1>Which language do you prefer?</h1>
        </div>
        <div className="language-body">
          <div className="language-options">
            <label style={{ display: "block" }}>
              <input
                type="radio"
                value="English"
                checked={selectedLanguage === "English"}
                onChange={handleLanguageChange}
              />
              English
            </label>
            <label style={{ display: "block" }}>
              <input
                type="radio"
                value="Hindi"
                checked={selectedLanguage === "Hindi"}
                onChange={handleLanguageChange}
              />
              हिन्दी
            </label>
            <label style={{ display: "block" }}>
              <input
                type="radio"
                value="Tamil"
                checked={selectedLanguage === "Tamil"}
                onChange={handleLanguageChange}
              />
              தமிழ்
            </label>
            <label style={{ display: "block" }}>
              <input
                type="radio"
                value="Telugu"
                checked={selectedLanguage === "Telugu"}
                onChange={handleLanguageChange}
              />
              తెలుగు
            </label>
            <label style={{ display: "block" }}>
              <input
                type="radio"
                value="Malayalam"
                checked={selectedLanguage === "Malayalam"}
                onChange={handleLanguageChange}
              />
              മലയാളം
            </label>
            <label style={{ display: "block" }}>
              <input
                type="radio"
                value="Kannada"
                checked={selectedLanguage === "Kannada"}
                onChange={handleLanguageChange}
              />
              ಕನ್ನಡ
            </label>
            <label style={{ display: "block" }}>
              <input
                type="radio"
                value="Marathi"
                checked={selectedLanguage === "Marathi"}
                onChange={handleLanguageChange}
              />
              मराठी
            </label>
            <p>
              This allows you to experience the app in a language of your
              preference.
            </p>
          </div>
          <button className="submit" onClick={handleSubmit}>
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default Language;
