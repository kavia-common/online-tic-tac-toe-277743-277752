import React, { useEffect, useState } from "react";
import "./App.css";
import "./styles/theme.css";
import Game from "./components/Game";

function App() {
  // Retain theme switch (optional)
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className="App">
      {/* Remove boilerplate header; focus on game */}
      <Game />
      <button
        className="theme-toggle"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      >
        {theme === "light" ? "🌙 Dark" : "☀️ Light"}
      </button>
    </div>
  );
}

export default App;
