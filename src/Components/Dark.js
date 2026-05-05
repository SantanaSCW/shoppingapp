import React, { useState } from "react";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleToggle() {
    setIsDarkMode(!isDarkMode);
  }

  return (
    <div className={isDarkMode ? "App" : "App light"}>
      <button onClick={handleToggle}>
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </button>
      {/* ... rest of your components */}
    </div>
  );
}