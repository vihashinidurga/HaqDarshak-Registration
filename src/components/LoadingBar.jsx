import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
function LoadingBar() {
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress < 100 ? prevProgress + 1 : 100
      );
    }, 30);
    if (progress === 100) {
      clearInterval(interval);
      navigate("/language");
    }

    return () => clearInterval(interval);
  }, [progress, navigate]);

  return (
    <div className="loading-bar-container">
      <div className="loading-bar" style={{ width: `${progress}%` }} />
    </div>
  );
}
export default LoadingBar;
