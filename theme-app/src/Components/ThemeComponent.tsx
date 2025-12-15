import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

function ThemeComponent() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="container">
      <div className="bg-muted">
        <h2>Theme Component</h2>
        <p className={theme == "dark" ? "text-white" : "text-dark"}>
          Current selected theme is {theme}
        </p>

        <button onClick={toggleTheme}>Toggle Theme</button>
      </div>
    </div>
  );
}

export default ThemeComponent;